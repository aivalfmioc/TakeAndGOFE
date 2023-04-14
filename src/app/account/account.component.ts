import { JsonPipe } from '@angular/common';
import { identifierName } from '@angular/compiler';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  user : User = new User();
  show: Boolean = false;
  password1: string = "";
  password2: string = "";
  pass_mess: string = "";
  constructor(public router: Router, public userService: UserService){
    this.user=JSON.parse(localStorage.getItem('user')!);
  }
  set(){
    localStorage.setItem('user','hello');
    this.router.navigateByUrl('/');
    
  }
  ngOnInit(): void{}
  unset(){
    localStorage.removeItem('user');
    window.location.reload();
  }
  changePassword(){
    this.show = !this.show;
  }
  verifyPassword(){
    this.pass_mess="";
    console.log("here")
    if(this.show==true){
      console.log("here")
      const value = this.password2;
    const hasUpperCase = /[A-Z]+/.test(value);
    const hasLowerCase = /[a-z]+/.test(value);
    const hasNumeric = /[0-9]+/.test(value);
    const has8Characters = value.length >= 8;

    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && has8Characters;
    if(passwordValid){
      console.log("here")
      let user1 = new User();
      user1.oldPassword=this.password1;
      user1.newPassword=this.password2;
      this.userService.changePassword(user1).subscribe(
        data=>{
          this.pass_mess="Password changed";
          
        },
        error=>{
          this.pass_mess = error.error;
        }
      )
    }
    else{
      this.pass_mess="Password not valid";
    }
    }

    return true;
  }
  onUpdate(){
    this.verifyPassword()
    console.log(this.user)
    let u  = new User();
    u.id=this.user.id;
    u.firstname = this.user.firstname;
    u.lastname = this.user.lastname;
    u.email = this.user.email;
    this.userService.updateUser(u).subscribe(
      data=>{
        console.log(data)
        localStorage.setItem('user',JSON.stringify(this.user));
      }
    )

  }
  
  openMenu(){
    document.getElementById('nav-content')!.style.transform = "translateX(0%)";
    document.getElementById('bg')!.style.visibility = "visible";
    document.getElementById('bg')!.style.opacity = "0.6";
  }
  closeMenu(){
    document.getElementById('nav-content')!.style.transform = "translateX(-100%)";
    document.getElementById('bg')!.style.visibility = "hidden";
    document.getElementById('bg')!.style.opacity = "0.6";
  }
}
