import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string;
  pass:string;
 errmsg:string;

  constructor(private route:Router) { 


  }
  Validate()
  {
  
    
    if(this.name=="steve"&&this.pass=="123")
    {
      sessionStorage.setItem("un",this.name);
      this.route.navigateByUrl('buyer');
    }
    else if(this.name=="susi"&&this.pass=="123")
    {
      sessionStorage.setItem("un",this.name);
      this.route.navigateByUrl('seller');
    }
    else if(this.name=="mike"&&this.pass=="123")
    {
      sessionStorage.setItem("un",this.name);
      this.route.navigateByUrl('admin');
    }
    else{
      this.errmsg="invalid details"
    }
  
  }

  ngOnInit() {
  }

}
