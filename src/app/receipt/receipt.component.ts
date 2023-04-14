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
  openMenu(){
    document.getElementById('nav-content')!.style.transform = "translateX(0%)";
    document.getElementById('bg')!.style.visibility = "visible";
    document.getElementById('bg')!.style.opacity = "0.6";
  }
  closeMenu(){
    document.getElementById('nav-content')!.style.transform = "translateX(-100%)";
    document.getElementById('bg')!.style.visibility = "hidden";
    document.getElementById('bg')!.style.opacity = "0.6";
  }
}
