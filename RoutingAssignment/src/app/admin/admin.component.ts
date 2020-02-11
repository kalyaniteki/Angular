import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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
