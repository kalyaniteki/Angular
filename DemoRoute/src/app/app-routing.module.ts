import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstpageComponent } from './mydemo/firstpage.component';
import { SecondpageComponent } from './mydemo/secondpage.component';


const routes: Routes = [
  {path:"firstpage",component:FirstpageComponent},
  {path:"secondpage",component:SecondpageComponent},
  {path:"",redirectTo:"/secondpage",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
