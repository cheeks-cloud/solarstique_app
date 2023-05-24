import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { CarbonComponent } from './components/carbon/carbon.component';
import { CartComponent } from './components/cart/cart.component';
import { MarketComponent } from './components/market/market.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  { path:'',component:HomeComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'carbon',component: CarbonComponent },
  { path: 'buy',component: CartComponent },
  { path: 'sell',component: MarketComponent },
  { path: 'auth',component: LoginComponent},
  { path: 'signup',component:SignupComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
