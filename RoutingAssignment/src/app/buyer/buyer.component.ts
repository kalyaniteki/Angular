import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
name:string;
  constructor(private route:Router) { 
    if(sessionStorage.getItem("un"))
    {
      this.name=sessionStorage.getItem("un");
      console.log(this.name);
    }
    else{
      this.route.navigateByUrl('login');
    }
  }

  ngOnInit() {
  }
  logout()
  {
    sessionStorage.clear();
    this.route.navigate(['login']);
  }

}
