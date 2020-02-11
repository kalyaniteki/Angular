import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-demo',
  templateUrl: './event-demo.component.html',
  styleUrls: ['./event-demo.component.css']
})
export class EventDemoComponent implements OnInit {
  name:string;

  constructor() { }

  ngOnInit() {
  }
   setName()   //method
  {
    this.name='joyce';
  }
  greet(val:string)
  {
      this.name=val;
  }

}
