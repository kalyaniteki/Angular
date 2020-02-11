import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { AdminComponent } from './admin/admin.component';
import { BuyitemComponent } from './Buyer/buyitem/buyitem.component';
import { PaymentComponent } from './Buyer/payment/payment.component';
import { ViewcartComponent } from './Buyer/viewcart/viewcart.component';
import { AdditemComponent } from './seller/additem/additem.component';
import { ViewitemsComponent } from './seller/viewitems/viewitems.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddRemoveBuyerComponent } from './Admin/add-remove-buyer/add-remove-buyer.component';
import { AddRemoveSellerComponent } from './Admin/add-remove-seller/add-remove-seller.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'buyer',component:BuyerComponent,children:[
    {path:'buyitem',component:BuyitemComponent},
    {path:'payment',component:PaymentComponent},
    {path:'viewcart',component:ViewcartComponent}]},
  {path:'seller',component:SellerComponent,children:[
    {path:'additem',component:AdditemComponent},
    {path:'viewitems',component:ViewitemsComponent}
  ]},
  {path:'admin',component:AdminComponent,children:[
    {path:'add-category',component:AddCategoryComponent},
    {path:'add-remove-buyer',component:AddRemoveBuyerComponent},
    {path:'add-remove-seller',component:AddRemoveSellerComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
