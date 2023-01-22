import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {
  options: AnimationOptions = {    
    path: '/assets/lottie/map.json'  
  };  

  constructor(private router: Router) { }  

  ngOnInit(): void { 
    setTimeout(() => {this.router.navigateByUrl('/map');
  }, 3000)
   }

  // This is the component function that binds to the animationCreated event from the package  
  onAnimate(animationItem: AnimationItem): void {    
    //console.log(animationItem);  
  }
}
