import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../models/card';
import { IntObject } from '../models/int-object';
import { Item } from '../models/item';
import { Shop } from '../models/shop';
import { User } from '../models/user';
import { ItemService } from '../services/item.service';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cards: Card[] = [];
  items: Item[] = [];
  id!: IntObject;
  user!: User;
  searchText: String = "Please select a card"
  searchUp: Boolean = true;
  isLoading : Boolean  = false;
  constructor(private itemService: ItemService, private router: Router){
    this.user=JSON.parse(localStorage.getItem('user')!);
    this.itemService.getCards().subscribe(data=>{
      this.cards=data;
      console.log(this.cards)
  })
  this.itemService.getItems().subscribe(data=>{
    this.items=data;
    console.log(this.cards)
})
  }
  searchButton(){
    this.searchUp = !this.searchUp;
  }
  ngOnInit() {
    
  }
  cardSelected(select: number, code : string){
    this.searchUp=true;
    this.searchText = '**** **** **** '+code;
  }
  validatePayment(){

  }
  pay(){
    if(this.searchText !== "Please select a card"){
      this.isLoading = true;
      this.itemService.addOrder().subscribe(data=>{
        this.id=data;
        this.user= JSON.parse(localStorage.getItem('user')!);
        this.user.cart_id = this.id.number;
        localStorage.setItem('user',JSON.stringify(this.user));
        this.isLoading = false;
        this.router.navigateByUrl('/orderDone');
      })
    }
    
  }
}
