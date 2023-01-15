import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  options: AnimationOptions = {    
    path: '/assets/lottie/successMark.json'  
  };  

  constructor(private router: Router) { }  

  ngOnInit(): void { 
    setTimeout(() => {this.router.navigateByUrl('/home');
  }, 2500)
   }

  // This is the component function that binds to the animationCreated event from the package  
  onAnimate(animationItem: AnimationItem): void {    
    console.log(animationItem);  

}
}
