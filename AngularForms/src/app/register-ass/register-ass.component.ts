import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { RegUser } from '../reg-user';
@Component({
  selector: 'app-register-ass',
  templateUrl: './register-ass.component.html',
  styleUrls: ['./register-ass.component.css']
})
export class RegisterAssComponent implements OnInit {
registerForm:FormGroup;
item:RegUser;
list:RegUser[]=[];
submitted=false;
  constructor(private formbu:FormBuilder) { 
   

  }

  ngOnInit() {
    this.registerForm=this.formbu.group({
      id:['',[Validators.required,Validators.pattern("^[E][0-9]{4}$")]],
      name:['',[Validators.required,Validators.pattern("^[A-Z]{5}$")]],
      joindate:['',Validators.required],
      designation:['',Validators.required],
      mobile:['',Validators.pattern("^[6-9][0-9]{9}$")],
      email:['',Validators.email],
      password:['',[Validators.required,Validators.pattern("^[0-9a-zA-Z]{7}[!@#$%&*^]{1}$")]]


    });
  }
  Add()
  {
    this.submitted=true;
    if(this.registerForm.invalid)
    {
      return;
    }
    else{
      alert("form is validated");
      this.item=new RegUser();
        
          this.item.id=this.registerForm.value["id"]
      this.item.name=this.registerForm.value["name"]
      this.item.joindate=this.registerForm.value["joindate"]
      this.item.designation=this.registerForm.value["designation"]
      this.item.mobile=this.registerForm.value["mobile"]
      this.item.email=this.registerForm.value["email"]
      this.item.password=this.registerForm.value["password"]
      this.list.push(this.item);
    }

  }
  get f(){return this.registerForm.controls}
  onReset()
{
  this.submitted=false;
  this.registerForm.reset();
}

  
  

}
