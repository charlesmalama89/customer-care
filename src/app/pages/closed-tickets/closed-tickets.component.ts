import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-closed-tickets',
  templateUrl: './closed-tickets.component.html',
  styleUrls: ['./closed-tickets.component.scss']
})
export class ClosedTicketsComponent implements OnInit {

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
