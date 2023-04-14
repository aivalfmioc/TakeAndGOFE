import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../models/item';
import { Shop } from '../models/shop';
import { User } from '../models/user';
import { ItemService } from '../services/item.service';
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
  isloading: Boolean = true;
  constructor(private itemService: ItemService, private router: Router){
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
          this.isloading = false;
        })
    })
  }
  increase(id: number){
    this.isloading = true;
    this.itemService.increaseItem(id).subscribe(
      data=>{
        this.updateCart();
      },
    )
  }
 
  decrease(id: number){
    this.isloading = true;
    this.itemService.decreaseItem(id).subscribe(
      data=>{
        this.updateCart();
      },
    )
  }
  deleteItem(id: number){
    this.isloading = true;
    this.itemService.deleteItem(id).subscribe(
      data=>{
        console.log(data);
        this.itemService.getItems().subscribe(data=>{
          this.items=data;
          if(this.items.length>0)
            this.itemService.getTotal().subscribe(data=>{
              console.log(data);
              this.total = data.total;
              this.isloading=false;
            })
          else{
            this.total= new Float32Array;
          }
        })
      }
    )
  }
  goToCheckout(){
    if(this.items.length>0){
      this.router.navigateByUrl('/checkout');
    }
  }
  dragItem(){
    console.log("item dragged")
  }
}
