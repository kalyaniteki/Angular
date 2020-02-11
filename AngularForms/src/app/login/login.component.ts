import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators}from "@angular/forms";
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform:FormGroup;
submitted=false;
item:User;

  constructor(private formbuilder:FormBuilder) {
    this.item=new User();

   }

  ngOnInit() {
   this.loginform=this.formbuilder.group({
     uname:['',Validators.required],
     pwd:['',Validators.required]
   });

  }
  onSubmit(){
    this.submitted=true;
    if(this.loginform.invalid)
    {
      return;
    }
    else{
      alert("form is validated");
      console.log(this.loginform.value)
      console.log(JSON.stringify(this.loginform.value))
      console.log(this.loginform.value["uname"])
      console.log(this.loginform.value["pwd"])
      //assign to the model
      this.item.uname=this.loginform.value["uname"]
      this.item.pwd=this.loginform.value["pwd"]
      console.log(this.item)
    }

  }
  get f(){
    return this.loginform.controls;
  }
  onReset()
  {
    this.submitted=false;
    this.loginform.reset();
  }

}
