import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public router: Router){}
  set(){
    localStorage.setItem('user','hello');
    this.router.navigateByUrl('/');
    
  }
  unset(){
    localStorage.removeItem('user');
    window.location.reload();
  }
}
