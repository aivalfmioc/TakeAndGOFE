import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AuthGuardService } from './authentication/auth-guard.service';
import { CardsComponent } from './cards/cards.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { RegisterComponent } from './register/register.component';
import { ScanComponent } from './scan/scan.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuardService], 
  },
  {
    path: 'login', 
    component: LoginComponent,
  },
  {
    path: 'register', 
    component: RegisterComponent,
  },
  {
    path: 'map', 
    component: MapComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'receipt',
    component: ReceiptComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'cards',
    component: CardsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'scan',
    component: ScanComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuardService],
  },
  {
    path:'payment',
    component: PaymentComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
