import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
import { IntObject } from '../models/int-object';
import { Item } from '../models/item';
import { Product } from '../models/product';
import { Shop } from '../models/shop';
import { User } from '../models/user';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements AfterViewInit{
  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner!: BarcodeScannerLivestreamComponent;

  user: User = new User();
  shop: Shop = new Shop();
  item: Item = new Item();
  prod: Product[] = [];
  d: Boolean = true;
  constructor(private itemService: ItemService, private router: Router){
    this.user=JSON.parse(localStorage.getItem('user')!)
    this.shop=JSON.parse(localStorage.getItem('shop')!)
    this.itemService.getProd().subscribe(data=>{
      this.prod=data;
      console.log(this.prod);
    })
  }
  barcodeValue! : string;
  type="ean";
  ngAfterViewInit() {
    this.barcodeScanner.start();
  }
  exists(){
  this.prod.forEach(e =>{
    if(e.barcode==this.barcodeValue)
      this.d = false;
  })
  }
  onValueChanges(result: any) {
    this.barcodeValue = result.codeResult.code;
    if(this.barcodeValue !== undefined){
      console.log(this.barcodeValue)
      this.barcodeScanner.stop();
      this.item.barcode=this.barcodeValue;
      this.item.userID=this.user.id;
      this.item.shopID=this.shop.id;
      console.log(this.item)
      this.itemService.addItem(this.item).subscribe(data=>{
        console.log(data);
        this.router.navigateByUrl('/cart');
      },
      error=>{
        this.barcodeScanner.start()
        console.log("error")
      })
    }
  }

  onStarted(started: any) {
    console.log(started);
  }
}
