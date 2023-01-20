import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../models/item';
import { Receipt } from '../models/receipt';
import { ReceiptService } from '../services/receipt.service';

@Component({
  selector: 'app-seereceipt',
  templateUrl: './seereceipt.component.html',
  styleUrls: ['./seereceipt.component.css']
})
export class SeereceiptComponent{
  receipt!: Receipt;
  items: Item[] = [];
  isLoading: Boolean = true;
  constructor(private route: ActivatedRoute, private receiptService: ReceiptService){
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      console.log(Number(id));
      this.receiptService.getItems(Number(id)).subscribe(data=>{
        this.items=data; console.log(this.items);
        this.receiptService.getReceipt(Number(id)).subscribe(data=>{
          this.receipt=data;console.log(this.receipt);
          this.isLoading = false;
        });
      });
    });
  }
}
