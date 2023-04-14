import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie/lib/symbols';

@Component({
  selector: 'app-payment-loading',
  templateUrl: './payment-loading.component.html',
  styleUrls: ['./payment-loading.component.css']
})
export class PaymentLoadingComponent {
  options: AnimationOptions = {    
    path: '/assets/lottie/paymentLoading.json'  
  };
}
