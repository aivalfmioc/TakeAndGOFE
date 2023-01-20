import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Shop } from '../models/shop';
import { ShopService } from '../services/shop.service';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  page: number = 1;
  user : User = new User();
  shops: Shop[] = [];
  selected: any;
  constructor(private shopService: ShopService,public router: Router, public userService: UserService){
    this.user=JSON.parse(localStorage.getItem('user')!);
    this.shopService.getShops().subscribe(data=>{
      this.shops=data;
  })
  }
  
  set(){
    localStorage.setItem('user','hello');
    this.router.navigateByUrl('/');
    
  }
  ngOnInit(): void{}
  unset(){
    localStorage.removeItem('user');
    window.location.reload();
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
  // changeContent(page: number){
  //   this.page = page;
  //   document.getElementById('nav-content')!.style.transform = "translateX(-100%)";
  // }
  // buttonClicked(){
  //   document.getElementById('nav-content')!.style.transform = "none";
  // }
}
