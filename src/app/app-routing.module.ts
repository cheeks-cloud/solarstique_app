import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';




const routes: Routes = [
  { path: 'about', component: AboutusComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
