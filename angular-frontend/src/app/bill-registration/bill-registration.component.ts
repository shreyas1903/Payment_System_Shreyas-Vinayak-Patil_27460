import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-registration',
  templateUrl: './bill-registration.component.html',
  styleUrls: ['./bill-registration.component.css'],
})
export class BillRegistrationComponent {
  billerCode: string = '';
  consumerNumber: string = '';
  billNumber: string = '';
  billAmount: number = 0;
  dueDate: string = '';

  constructor(private http: HttpClient) {}

  registerBill(): void {
    const billData = {
      billerCode: this.billerCode,
      consumerNumber: this.consumerNumber,
      billNumber: this.billNumber,
      billAmount: this.billAmount,
      dueDate: this.dueDate,
    };

    this.http.post<any>('/api/registerBill', billData).subscribe(
      (response) => {
        // Handle the response if needed
        console.log(response);
      },
      (error) => {
        // Handle the error if registration fails
        console.error(error);
      }
    );
  }
}
