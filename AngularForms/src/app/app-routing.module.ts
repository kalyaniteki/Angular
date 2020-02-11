import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductLoginComponent } from './product-login/product-login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterAssComponent } from './register-ass/register-ass.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'product-login',component:ProductLoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'register-ass',component:RegisterAssComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
