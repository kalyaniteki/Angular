import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';

@Component({
  selector: 'app-demo22',
  templateUrl: './demo22.component.html',
  styleUrls: ['./demo22.component.css']
})
export class Demo22Component implements OnInit {
  val:boolean=true;
list:Student[]=[];
 sid:number;
 sname:string;
 std:string;
 age:number;
 item:Student;
 stds:string[]=["I","II","III"]

  constructor() {
  this.list=[
   {sid:1,sname:'mike',std:'II',age:12},
   {sid:2,sname:'joyce',std:'III',age:11},
   {sid:3,sname:'bill',std:'I',age:7},
   {sid:4,sname:'Hopper',std:'IV',age:13},
   {sid:5,sname:'Bob',std:'V',age:14},

  ]


   }
    public Add()
   {
     this.item=new Student();
     this.item.sid=this.sid;
     this.item.sname=this.sname;
     this.item.std=this.std;
     this.item.age=this.age;
     this.list.push(this.item);


   }

  ngOnInit() {
  }
setval()
{
  this.val=!this.val;
}

}
