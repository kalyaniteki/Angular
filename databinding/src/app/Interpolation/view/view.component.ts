import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
obj:Student;
url:string="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAnCwQAs4zv3FxEo3wd5RcB2b5ZftdlWcoXLmvJEkkwxTCcQXA"

  constructor() { 

    // this.obj=new Student();
    // this.obj.sid=1;
    // this.obj.sname="steve";
    // this.obj.std="II";
    // this.obj.age=14;
    // this.obj.dob=new Date;
    this.obj={sid:1,sname:"kal",std:"II",age:3,dob:new Date(4556,4,5)}

  }

  ngOnInit() {

  }

}
