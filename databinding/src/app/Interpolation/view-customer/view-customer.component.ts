import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  obj:Customer;
  constructor() {
    this.obj={cname:"steve",email:'steve@gmail.com',mobile:547678,city:"hyd",address:"strangerthings"}
   
   }

  ngOnInit() {
  }

}
