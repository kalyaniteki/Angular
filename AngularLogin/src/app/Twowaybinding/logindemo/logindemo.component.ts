import { Component, OnInit } from '@angular/core';
import { Loginmodel } from '../loginmodel';

@Component({
  selector: 'app-logindemo',
  templateUrl: './logindemo.component.html',
  styleUrls: ['./logindemo.component.css']
})
export class LogindemoComponent implements OnInit {
item:Loginmodel
res:string;
  constructor() {
    this.item=new Loginmodel();

   }
   valid(val1:string,val2:string)
   {
     if(val1=="Admin"&&val2=="1234")
     {
       this.res="login success";
      //console.log("login success");
     }
     else
     {
      this.res="login failed";
     // console.log("login fail");
     }
   }

  ngOnInit() {
    console.log(this.res)
  }

}
