import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {
  page: number = 1;
  // changeContent(page: number){
  //   this.page = page;
  //   document.getElementById('nav-content')!.style.transform = "translateX(-100%)";
  // }
  // buttonClicked(){
  //   document.getElementById('nav-content')!.style.transform = "none";
  // }
}
