import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './NG_IF/demo1/demo1.component';
import { DemoForComponent } from './NG_For/demo-for/demo-for.component';
import { Demo22Component } from './NG_For/demo22/demo22.component';
import { DemoAssignmentComponent } from './NG_ForAssignment/demo-assignment/demo-assignment.component';
import { DemoSwitchComponent } from './NG_SWITCH/demo-switch/demo-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    DemoForComponent,
    Demo22Component,
    DemoAssignmentComponent,
    DemoSwitchComponent
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
