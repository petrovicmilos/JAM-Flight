import { Component } from '@angular/core';
import { PaymentForm } from './payment-form.model';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-proceed-to-payment',
  templateUrl: './proceed-to-payment.component.html',
  styleUrls: ['./proceed-to-payment.component.css']
})
export class ProceedToPaymentComponent {
  paymentFormModel: PaymentForm = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phoneNumber: '',
    cardNumber: '',
    cardExpiry: '',
    cvv: ''
  };

  isAuthenticated: boolean = false; // Add a property to track user authentication

  constructor(private authService: UserService) {}

  ngOnInit() {
    // Check if the user is authenticated
    //this.isAuthenticated = this.authService.isAuthenticated();

    // If the user is authenticated, populate the form with user details
    if (this.isAuthenticated) {
      //const user = this.authService.getCurrentUser(); // Adjust this based on your authentication service
      //this.paymentFormModel = { ...user, ...this.paymentFormModel };
    }
  }

  confirmPayment() {
    // Implement the logic to confirm the payment
    // You can use the paymentFormModel to gather the data
    // Also, consider navigating to a success page or processing the payment.
  }
}
