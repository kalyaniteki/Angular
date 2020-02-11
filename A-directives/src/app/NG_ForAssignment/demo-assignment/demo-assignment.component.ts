import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/Models/project';

@Component({
  selector: 'app-demo-assignment',
  templateUrl: './demo-assignment.component.html',
  styleUrls: ['./demo-assignment.component.css']
})
export class DemoAssignmentComponent implements OnInit {
  val:boolean=false;
list:Project[]=[];
proid:number;
pname:string;
domain:string;
startdate:Date;
enddate:Date;
item:Project;
  constructor() { 

  }
  Add()
  {
    this.item=new Project();
    this.item.proid=this.proid;
    this.item.pname=this.pname;
    this.item.domain=this.domain;
    this.item.startdate=this.startdate;
    this.item.enddate=this.enddate;
    this.list.push(this.item);


  }
  setval()
  {
    this.val=!this.val;
  }

  ngOnInit() {
  }


}
