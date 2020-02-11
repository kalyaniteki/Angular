import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../task';
import { NgFormSelectorWarning } from '@angular/forms';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
list:Task[]=[];
name:string;
  constructor(route:Router) { 
    if(localStorage.getItem("listdata"))
    {
      this.list=JSON.parse(localStorage.getItem("listdata"));
    }
  }

  ngOnInit() {
  }

}
