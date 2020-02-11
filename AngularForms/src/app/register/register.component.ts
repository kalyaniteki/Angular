import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
regform:FormGroup;
submitted=false;
  constructor(private form:FormBuilder) { }

  ngOnInit() {
  this.regform=this.form.group({
  title:['',Validators.required],
  firstName:['',[Validators.required,Validators.pattern("^[a-z]{3,6}$")]],
  lastName:['',Validators.required],
  mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required,Validators.minLength(6)]],
  acceptTerms:[false,Validators.requiredTrue]


});
  }
Add()
{
  this.submitted=true;
  if(this.regform.valid)
  {
      alert('Success!! :-\n\n')
    
  }
}
get f(){return this.regform.controls}
onReset()
{
  this.submitted=false;
  this.regform.reset();
}

}



  

