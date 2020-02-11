import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-product-login',
  templateUrl: './product-login.component.html',
  styleUrls: ['./product-login.component.css']
})
export class ProductLoginComponent implements OnInit {
loginform:FormGroup;
submitted=false;
  constructor(private formb:FormBuilder) { }

  ngOnInit() {
    this.loginform=this.formb.group({
      proid:['',Validators.required],
      proname:['',Validators.required],
      price:['',Validators.required],
      stock:['',Validators.required]
    });
  }
  Add()
  {
    this.submitted=true;
    if(this.loginform.invalid)
    {
      return;
    }
    else
    {
        alert("form is validated")
    }
  }
  get f(){return this.loginform.controls}
  onReset()
  {
    this.submitted=false;
    this.loginform.reset();
  }

}
