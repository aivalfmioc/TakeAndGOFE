import { Component } from '@angular/core';
import { Shop } from '../models/shop';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  shop!: Shop;
  constructor(private shopService: ShopService){
    this.shop = JSON.parse(localStorage.getItem('shop')!);
  }

}
