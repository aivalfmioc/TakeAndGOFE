import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Shop } from '../models/shop';
import { ShopService } from '../services/shop.service';
import { MarkDialogComponent } from './mark-dialog/mark-dialog.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  zoom = 15;
  markers :any[] = [];
  shops: Shop[] = [];
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    clickableIcons: false,
    maxZoom: 20,
    minZoom: 8,
    mapTypeControl: false,
  };
  constructor(private shopService: ShopService,  public dialog: MatDialog){
    this.shopService.getShops().subscribe(data=>{
      this.shops=data;
      console.log(this.shops);
      for(let shop of this.shops){
        this.markers.push({
          id: shop.id,
          position: {
            lat: shop.latitude,
            lng: shop.longitude,
          },
          label: {
            color: 'black',
            text: shop.name,
            fontWeight: 'bold',
          },
          title: shop.name,
          options:{
            clickable: true,
            animation: google.maps.Animation.BOUNCE
          }
        });
      }
    })
  }
  ngOnInit() {
     
      if(localStorage.getItem('shop'))
        localStorage.removeItem('shop');
      this.center = {
        lat: 45.7494,
        lng: 21.2272,
      };
  }
  findShop(id: number){
    return this.shops.find(shop => shop.id == id);
  }
  markerClicked(shopID: number){
    
   this.dialog.open(MarkDialogComponent, {
    width: '100%', 
    data: this.findShop(shopID)
    })
  }
}



