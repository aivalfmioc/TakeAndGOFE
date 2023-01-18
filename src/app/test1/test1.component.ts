import { Component } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {
  page: number = 1;
  user : User = new User();
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
  // changeContent(page: number){
  //   this.page = page;
  //   document.getElementById('nav-content')!.style.transform = "translateX(-100%)";
  // }
  // buttonClicked(){
  //   document.getElementById('nav-content')!.style.transform = "none";
  // }
}
