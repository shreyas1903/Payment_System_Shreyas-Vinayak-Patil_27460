import { Component } from '@angular/core';

@Component({
  selector: 'app-credit-card-payment',
  templateUrl: './credit-card-payment.component.html',
  styleUrls: ['./credit-card-payment.component.css']
})
export class CreditCardPaymentComponent {
  paymentForm: any = {
    billNumber: '',
    consumerName: '',
    amount: null,
    paymentDate: ''
  };

  onSubmit() {
    
    console.log(this.paymentForm);
  
  }
}
