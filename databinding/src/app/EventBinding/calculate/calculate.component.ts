import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
a:number;
b:number;
res:number;
  constructor() { }

  ngOnInit() {
  }
  add(val1:number,val2:number)
{
 
 this.res=Number(val1)+Number(val2);
}
sub(val1:number,val2:number)
{

 this.res=val1-val2;
}

}
