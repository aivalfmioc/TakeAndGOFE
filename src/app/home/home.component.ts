import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Shop } from '../models/shop';
import { ShopService } from '../services/shop.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  shops: Shop[] = [];
  selected: any;
  constructor(private shopService: ShopService, private router: Router){
    this.shopService.getShops().subscribe(data=>{
      this.shops=data;
  })
  }
  ngOnInit() {
    
  }
  findShop(id: number){
    return this.shops.find(shop => shop.id == id);
  }
  shopSelected(select: any){
    let shop= this.findShop(select.target.value);
    if(localStorage.getItem('shop'))
      localStorage.removeItem('shop')
    localStorage.setItem('shop',JSON.stringify(shop));
    this.router.navigateByUrl('/cart');
  }
}
