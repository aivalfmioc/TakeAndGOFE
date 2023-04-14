import { Component,  OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-animationcart',
  templateUrl: './animationcart.component.html',
  styleUrls: ['./animationcart.component.css']
})
export class AnimationcartComponent implements OnInit{
  options: AnimationOptions = {    
    path: '/assets/lottie/shoppingcartloader.json'  
  };  

  constructor(private router: Router) { }  

  ngOnInit(): void { 
  //   setTimeout(() => {this.router.navigateByUrl('/home');
  // }, 3000)
   }

  // This is the component function that binds to the animationCreated event from the package  
  onAnimate(animationItem: AnimationItem): void {    
    console.log(animationItem);  

}
}
