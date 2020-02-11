import { Component, OnInit } from '@angular/core';

@Component({

  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  title:string="firstpage";
  name:string="will";
  date:string="2-12-2190";

  constructor() { }

  ngOnInit() {
  }

}
