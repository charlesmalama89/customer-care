import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
 
  listOfData = [
    {
      ticketNumber: '1232',
      client: 260971042607,
      department: 'IT',
      product: 'Patumba',
      status: 'Pending',
      created_on: '2020-01-22'
    }
  ];
 
  constructor() { }

  ngOnInit() {
  }

}
