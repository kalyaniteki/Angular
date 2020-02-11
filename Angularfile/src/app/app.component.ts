import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angularfile';
  num:number=30;
  imagepath:string= 'assets/images/tom&jerry.jpg';
  name:string='kalyani';
  lastname:string='TEKI';
  isdisabled:boolean=true;
  mystyle:string="boldclass italicclass";
  applyStyle:boolean=true;
  getname():string{
    this.name=this.name.toUpperCase();
    return this.name+" "+this.lastname;
  }
}