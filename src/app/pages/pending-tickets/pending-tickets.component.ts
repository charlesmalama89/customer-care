import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pending-tickets',
  templateUrl: './pending-tickets.component.html',
  styleUrls: ['./pending-tickets.component.scss']
})
export class PendingTicketsComponent implements OnInit {

  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      formLayout: ['horizontal'],
      clientName: [null, [Validators.required]],
      phoneNum: [null, [Validators.required]],
      email: [null, [Validators.required]],
      comment: ['', [Validators.required]]
    });

  }
  isLoadingOne = false;
  isLoadingTwo = false;

  loadOne(): void {
    this.isLoadingOne = true;
    setTimeout(() => {
      this.isLoadingOne = false;
    }, 5000);
  }

  loadTwo(): void {
    this.isLoadingTwo = true;
    setTimeout(() => {
      this.isLoadingTwo = false;
    }, 5000);
  }

}
