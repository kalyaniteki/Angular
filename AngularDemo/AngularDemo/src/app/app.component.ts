import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDemo';
  Customer:any[]=[{"name":'raj',"country":'India',"age":23},
                   {"name":'rajjj1',"country":'USA',"age":22},
                    {"name":'rajjjjjj2',"country":'India',"age":27}];
   StudentbyCountry:any[]= [
     {
     "country":"India","student":[{"name":"will","age":23},{"name":"mike","age":25}],
     "Employee":[{"name":"max","age":29},{"name":"lucuis","age":26}]}, 
      {
        "country":"USA","student":[{"name":"dustin","age":21},{"name":"elll","age":20}],
        "Employee":[{"name":"roy","age":23},{"name":"joyce","age":45}]
      }             
               
   ]                

}
