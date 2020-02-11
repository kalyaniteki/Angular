import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {

  fname:string='lucky';
  lname:string='A';
  email:string='lucky@gmail.com';
  age:number=24;
  getStyle(){
    let Styles={"font-style": "italic","color": "hotpink"};
    return Styles;
   
  }
  Onclick()
  {
    console.log("you Clicked");
  }


}
