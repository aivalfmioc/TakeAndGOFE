import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie/lib/symbols';
import { User } from '../models/user';

@Component({
  selector: 'app-order-done',
  templateUrl: './order-done.component.html',
  styleUrls: ['./order-done.component.css']
})
export class OrderDoneComponent {
  options: AnimationOptions = {    
    path: '/assets/lottie/orderSuccess.json'  
  }; 
  constructor(private router: Router){}
  user!: User;
  seeReceipt(){
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.router.navigate(['seeReceipt',this.user.cart_id]);
  }
}
