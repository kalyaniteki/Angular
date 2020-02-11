import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import {RouterModule,Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { FirstpageComponent } from './mydemo/firstpage.component';
import { SecondpageComponent } from './mydemo/secondpage.component';
const appRoutes:Routes=[
{path:"firstpage",component:FirstpageComponent},
{path:"secondpage",component:SecondpageComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    SecondpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
