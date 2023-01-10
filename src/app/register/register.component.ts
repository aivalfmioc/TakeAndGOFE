import { Component, Injectable, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  user : User = new User();
  error_message: String = "";
  valid: Boolean = false;
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
  passwordhasError(){
    const value = this.user.password;
    if(!value)
      return false;
    const hasUpperCase = /[A-Z]+/.test(value);
    const hasLowerCase = /[a-z]+/.test(value);
    const hasNumeric = /[0-9]+/.test(value);
    const has8Characters = value.length >= 8;

    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && has8Characters;
    this.valid = passwordValid;
    return !(passwordValid && value);
  }
  passwordsNotMatchingError(){
    const value1 = this.user.checkPassword;
    const value2 = this.user.password;
    this.valid = (value1==value2);
    return value1!==value2 && value1;
  }
  invalidEmail(){
    this.valid  = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email);
    return !this.valid;
  }
  onSubmit(){
    if(this.valid){
    console.log("register",this.user);
    this.error_message = "";
    this.userService.addUser(this.user).subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl('/login');
    },
    error => {
      console.log(error.error);
      this.error_message=error.error;
    })
  }
  }
}
