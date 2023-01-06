import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user : User = new User();
  constructor(public router: Router, public userService: UserService){}
  set(){
    localStorage.setItem('user','hello');
    this.router.navigateByUrl('/');
    
  }
  ngOnInit(): void{}
  unset(){
    localStorage.removeItem('user');
    window.location.reload();
  }
  onSubmit(){
    console.log("log in",this.user);
   /* this.userService.addUser(this.user).subscribe(data=>{
      console.log(data)
    },
    error => {
      console.log(error);
    }) */
  }

}
