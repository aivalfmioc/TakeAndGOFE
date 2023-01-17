import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-emptycart',
  templateUrl: './emptycart.component.html',
  styleUrls: ['./emptycart.component.css']
})
export class EmptycartComponent {
  options: AnimationOptions = {    
    path: '/assets/lottie/shoppingcartloader.json'  
  }; 
}
