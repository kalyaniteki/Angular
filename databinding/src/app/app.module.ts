import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './Interpolation/demo/demo.component';
import { ViewComponent } from './Interpolation/view/view.component';
import { ViewCustomerComponent } from './Interpolation/view-customer/view-customer.component';
import { EventDemoComponent } from './EventBinding/event-demo/event-demo.component';
import { CalculateComponent } from './EventBinding/calculate/calculate.component';
import { Demo1Component } from './Twowaybinding/demo1/demo1.component';
import {FormsModule} from "@angular/forms";
import { Demo2Component } from './Twowaybinding/demo2/demo2.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ViewComponent,
    ViewCustomerComponent,
    EventDemoComponent,
    CalculateComponent,
    Demo1Component,
    Demo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent]
})
export class AppModule { }
