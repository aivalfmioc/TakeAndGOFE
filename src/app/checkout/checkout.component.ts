import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../models/card';
import { Shop } from '../models/shop';
import { ItemService } from '../services/item.service';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  shops: Card[] = [];
  selected: any;
  constructor(private shopService: ItemService, private router: Router){
    this.shopService.getCards().subscribe(data=>{
      this.shops=data;
      console.log(this.shops)
  })
  }
  ngOnInit() {
    
  }
  shopSelected(select: any){
    this.selected = select.target.value;
  }
  validatePayment(){

  }
  pay(){
    if(this.selected!='default'){
      this.validatePayment();
      this.shopService.addOrder().subscribe(data=>{
        console.log(data);
      })
    }
    
  }
}
