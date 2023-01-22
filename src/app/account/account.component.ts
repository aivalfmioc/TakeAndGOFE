import { JsonPipe } from '@angular/common';
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
  show: Boolean = true;
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
  onUpdate(){
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
}
