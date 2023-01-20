import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Shop } from 'src/app/models/shop';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-mark-dialog',
  templateUrl: './mark-dialog.component.html',
  styleUrls: ['./mark-dialog.component.css']
})
export class MarkDialogComponent {
  shop: Shop = new Shop();
  constructor( public dialogRef: MatDialogRef<MarkDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Shop, private router: Router, private itemService: ItemService) {
    console.log(data);
    this.shop=data;
  }
  shopHere(){
    if(localStorage.getItem('shop'))
      localStorage.removeItem('shop')
    this.itemService.deleteOrder();
    localStorage.setItem('shop',JSON.stringify(this.shop));
    this.dialogRef.close();
    this.router.navigateByUrl('/cart');
  }
}
