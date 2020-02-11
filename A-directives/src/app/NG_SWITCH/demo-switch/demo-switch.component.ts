import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-switch',
  templateUrl: './demo-switch.component.html',
  styleUrls: ['./demo-switch.component.css']
})
export class DemoSwitchComponent implements OnInit {
items:any[]=[
  {name:'One',val:1},
  {name:'Two',val:2},
  {name:'Three',val:3}
];
selectedvalue:string='One';
  constructor() { }

  ngOnInit() {
  }

}
