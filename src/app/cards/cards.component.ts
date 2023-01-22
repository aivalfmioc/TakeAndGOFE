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
  }}
