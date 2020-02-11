import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  name:string="mike";
  class:string="II";
  age:number=9;

  constructor() { }

  ngOnInit() {
  }

}
