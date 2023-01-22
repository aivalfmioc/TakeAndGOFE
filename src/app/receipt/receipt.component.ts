import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Receipt } from '../models/receipt';
import { User } from '../models/user';
import { ReceiptService } from '../services/receipt.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent {

  user!: User;
  receipts!: Receipt[];
  constructor(private receiptService: ReceiptService, private router: Router){
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.receiptService.getReceipts(this.user.id).subscribe(
      data=>this.receipts=data
    )
    // this.router.navigate(['seeReceipt',this.user.cart_id]);
  }
  seeReceipt(id: number){
    this.router.navigate(['seeReceipt',id]);
  }
}
