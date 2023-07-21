import { Component } from '@angular/core';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css'],
})
export class MakePaymentComponent {
  paymentData: any = {
    billNumber: '',
    consumerName: '',
    amount: null,
    paymentDate: '',
    paymentMode: '',
  };

  submitPaymentForm() {
    console.log('Payment Data:', this.paymentData);
  }
}
