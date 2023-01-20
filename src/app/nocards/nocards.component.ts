import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-nocards',
  templateUrl: './nocards.component.html',
  styleUrls: ['./nocards.component.css']
})
export class NocardsComponent {
  options: AnimationOptions = {    
    path: '/assets/lottie/empty-card.json'  
  };  

  constructor(private router: Router) { }  

  ngOnInit(): void { 
  
   }

  // This is the component function that binds to the animationCreated event from the package  
  onAnimate(animationItem: AnimationItem): void {    
    console.log(animationItem);  
  }
}
