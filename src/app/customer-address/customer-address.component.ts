import { Component, OnInit } from '@angular/core';
import {Address} from '../models/address'
import { FormGroup ,FormControl,Validators,FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.css']
})
export class CustomerAddressComponent implements OnInit {

  constructor() { }

  customerAddress : Address[] = [];
  newAddress : string = "";
  address : Address = {
    id: 1,
    customerId: 1,
    customerAddress : ""
  };
  addressId : number = 1;
  addedAddress : any = [];
  ngOnInit(): void {
  }


  addresssForm = new FormGroup({
    newAddress: new FormControl('', [Validators.required] ),
  }); 

  get f(){
    return this.addresssForm.controls;
  }

  insertAddress(): void{
    this.address = {
      id: this.addressId,
      customerId: 1,
      customerAddress : this.addresssForm.value.newAddress
    };

    this.addressId++;
    this.customerAddress.push(this.address);
    this.addresssForm.setValue({
      newAddress: ""
    });
  }

  updateAddress(id: number): void{
    let index = this.customerAddress.findIndex(m=> m.id = id);
    this.customerAddress[index].customerAddress =  (<HTMLInputElement>document.getElementById('addedAddress_' + (index+1))).value;
  }
}
