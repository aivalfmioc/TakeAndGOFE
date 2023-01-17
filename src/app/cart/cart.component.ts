import { Component } from '@angular/core';
import { Item } from '../models/item';
import { Shop } from '../models/shop';
import { User } from '../models/user';
import { ItemService } from '../services/item.service';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  shop!: Shop;
  user!: User;
  items: Item[] = [];
  total!: Float32Array;
  constructor(private itemService: ItemService){
    this.shop = JSON.parse(localStorage.getItem('shop')!);
    this.user=JSON.parse(localStorage.getItem('user')!);
    this.updateCart();
  }
  updateCart(){
    this.itemService.getItems().subscribe(data=>{
      this.items=data;
      if(this.items.length>0)
        this.itemService.getTotal().subscribe(data=>{
          console.log(data);
          this.total = data.total;
        })
    })
  }
  increase(id: number){
    this.itemService.increaseItem(id).subscribe(
      data=>{
        this.updateCart();
      },
    )
  }
  decrease(id: number){
    this.itemService.decreaseItem(id).subscribe(
      data=>{
        this.updateCart();
      },
    )
  }
  deleteItem(id: number){
    this.itemService.deleteItem(id).subscribe(
      data=>{
        console.log(data);
        this.itemService.getItems().subscribe(data=>{
          this.items=data;
          if(this.items.length>0)
            this.itemService.getTotal().subscribe(data=>{
              console.log(data);
              this.total = data.total;
            })
          else{
            this.total= new Float32Array;
          }
        })
      }
    )
  }
  dragItem(){
    console.log("item dragged")
  }
}
