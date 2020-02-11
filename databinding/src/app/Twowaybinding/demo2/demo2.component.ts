import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
item:Employee
  constructor() { 
//initiate employee
   this.item=new Employee();

  }

  ngOnInit() {
  }
  public Add()
  {
    
    console.log(this.item);
  }

}
