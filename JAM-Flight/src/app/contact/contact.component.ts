import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: { name: string, email: string, message: string } = { name: '', email: '', message: '' };

  constructor(private snackBar: MatSnackBar) {}

  sendMessage() {
    // Implement the logic to send the message (e.g., HTTP request to a server)
    console.log('Sending message:', this.contactForm);
    
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
      this.snackBar.open('Please fill in all fields.', 'Dismiss', {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
      });
      return;
    }

    this.snackBar.open('Message sent!', 'Dismiss', {
      duration: 2000, // Duration in milliseconds
      verticalPosition: 'bottom', // Position of the snackbar
      horizontalPosition: 'center', // Position of the snackbar
    });

    // Reset the form after sending the message
    this.contactForm = { name: '', email: '', message: '' };
  }
}
