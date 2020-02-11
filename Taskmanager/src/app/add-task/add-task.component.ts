import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
list:Task[]=[];
obj:Task;
name:string;
priority:number;
startdate:Date;
enddate:Date;
  constructor(private route:Router) { }

  ngOnInit() {
  }
  Add()
  {
    this.obj=new Task();
    this.obj.name=this.name;
    this.obj.priority=this.priority;
    this.obj.startdate=this.startdate;
    this.obj.enddate=this.enddate;
    if(localStorage.getItem("listdata"))
    {
      this.list=JSON.parse(localStorage.getItem("listdata"));
    }
    this.list.push(this.obj);
    localStorage.setItem("listdata",JSON.stringify(this.list));
  }
 public  reset()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  {
    localStorage.clear();
    this.route.navigateByUrl('add-task');
  }

}
