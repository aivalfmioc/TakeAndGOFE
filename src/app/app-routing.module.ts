import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AuthGuardService } from './authentication/auth-guard.service';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { MenuComponent } from './menu/menu.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    //canActivate: [AuthGuardService], 
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
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'receipt',
    component: ReceiptComponent
  },
  {
    path: 'cards',
    component: CardsComponent
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
