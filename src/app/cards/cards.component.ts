import { Component } from '@angular/core';
import { Card } from '../models/card';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  cards: Card[] = [];
  constructor(private itemService: ItemService){
    this.itemService.getCards().subscribe(
      data=>{this.cards=data}
    )
  }
  openMenu(){
    document.getElementById('nav-content')!.style.transform = "translateX(0%)";
    document.getElementById('bg')!.style.visibility = "visible";
    document.getElementById('bg')!.style.opacity = "0.6";
  }
  closeMenu(){
    document.getElementById('nav-content')!.style.transform = "translateX(-100%)";
    document.getElementById('bg')!.style.visibility = "hidden";
    document.getElementById('bg')!.style.opacity = "0.6";
  }
}
