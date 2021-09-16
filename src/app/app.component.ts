import { Component } from '@angular/core';
import {Customer} from './models/customer'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngFrontend';
  customerList : Customer[] = [];
  selectedCustomer : Customer | undefined = {
    id : null,
    customerName : '',
    fatherName: '',
    motherName: '',
    countryId: 1,
    maritalStatus: 0,
    customerPhoto: null,
    address : null
  };
  receiveCustomer($event : Customer) {
    this.customerList.push($event);
    console.log(this.customerList);
  }

  receiveCustomerName($event : string) {
    this.selectedCustomer = this.customerList.find(m=>m.customerName == $event);
    console.log(this.selectedCustomer);
  }
}
