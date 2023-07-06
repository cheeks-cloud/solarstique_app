import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import  { CartService } from'./services/cart.service';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoComponent } from './components/info/info.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { CarbonComponent } from './components/carbon/carbon.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { AuthServiceService } from './services/auth-service';
import { ProductsService } from './services/products.service';
import { MarketComponent } from './components/market/market.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { ProfileServiceService } from './services/profile-service.service';
import { BuyService } from './services/buy.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    InfoComponent,
    ProductsComponent,
    ContactComponent,
    AboutusComponent,
    HomeComponent,
    CarbonComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    MarketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule ,
    MatRadioModule ,
    MatMenuModule,
  ],
  providers: [CartService,AuthServiceService,
    ProductsService, ProfileServiceService,
    BuyService,
  ],
  exports:[],
  bootstrap: [AppComponent],

})
export class AppModule { }
