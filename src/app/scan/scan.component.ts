import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
import { IntObject } from '../models/int-object';
import { Item } from '../models/item';
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
  
  constructor(private itemService: ItemService, private router: Router){
    this.user=JSON.parse(localStorage.getItem('user')!)
    this.shop=JSON.parse(localStorage.getItem('shop')!)
  }
  barcodeValue! : string;
  type="ean";
  ngAfterViewInit() {
    this.barcodeScanner.start();
  }

  onValueChanges(result: any) {
    this.barcodeValue = result.codeResult.code;
    if(this.barcodeValue !== undefined){
      console.log(this.barcodeValue)
      
      this.item.barcode=this.barcodeValue;
      this.item.userID=this.user.id;
      this.item.shopID=this.shop.id;
      console.log(this.item)
      this.itemService.addItem(this.item).subscribe(data=>{
        console.log(data);
        this.router.navigateByUrl('/cart');
      })
    }
  }

  onStarted(started: any) {
    console.log(started);
  }
}
