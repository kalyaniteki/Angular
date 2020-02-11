import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductLoginComponent } from './product-login/product-login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterAssComponent } from './register-ass/register-ass.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductLoginComponent,
    RegisterComponent,
    RegisterAssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
