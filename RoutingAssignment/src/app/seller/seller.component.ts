import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
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
  logout()
  {
    sessionStorage.clear();
    this.route.navigateByUrl('login');
  }

  ngOnInit() {
  }

}
