import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { AdminComponent } from './admin/admin.component';
import { BuyitemComponent } from './Buyer/buyitem/buyitem.component';
import { ViewcartComponent } from './Buyer/viewcart/viewcart.component';
import { PaymentComponent } from './Buyer/payment/payment.component';
import { AdditemComponent } from './seller/additem/additem.component';
import { ViewitemsComponent } from './seller/viewitems/viewitems.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddRemoveBuyerComponent } from './Admin/add-remove-buyer/add-remove-buyer.component';
import { AddRemoveSellerComponent } from './Admin/add-remove-seller/add-remove-seller.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BuyerComponent,
    SellerComponent,
    AdminComponent,
    BuyitemComponent,
    ViewcartComponent,
    PaymentComponent,
    AdditemComponent,
    ViewitemsComponent,
    AddCategoryComponent,
    AddRemoveBuyerComponent,
    AddRemoveSellerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
