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
  // findShop(id: number){
  //   return this.shops.find(shop => shop.id == id);
  // }
  shopSelected(select: any){
    this.selected = select.target.value;
    // let shop= this.findShop(select.target.value);
    // if(localStorage.getItem('shop'))
    //   localStorage.removeItem('shop')
    // localStorage.setItem('shop',JSON.stringify(shop));
    // this.router.navigateByUrl('/cart');
  }
  pay(){
    console.log(this.selected);
  }
}
