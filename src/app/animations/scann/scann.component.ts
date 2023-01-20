import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-scann',
  templateUrl: './scann.component.html',
  styleUrls: ['./scann.component.css']
})
export class ScannComponent {
  options: AnimationOptions = {    
    path: '/assets/lottie/scanner.json'  
  }; 
}
