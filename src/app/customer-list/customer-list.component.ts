import { Component, OnInit,Input ,Output, EventEmitter  } from '@angular/core';
import {Customer} from '../models/customer'

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  @Input() newCustomerList: Customer[] = [];
  @Output() selectedCustomerEvent = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }
  sendCustomerName(name : string){
    //console.log(name);
    this.selectedCustomerEvent.emit(name);
  }
}
