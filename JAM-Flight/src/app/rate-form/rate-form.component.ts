import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Flight } from '../flights-list/flights-list.model';
import { UserService, User } from '../auth/user.service';

@Component({
  selector: 'app-rate-form',
  templateUrl: './rate-form.component.html',
  styleUrls: ['./rate-form.component.css']
})
export class RateFormComponent {
  @Input() flight: Flight;
  @Output() onSubmit = new EventEmitter<{ flightArrivalLocation: string, rating: number, comment: string, user: User }>();

  constructor(private userService: UserService) {}

  rating: number = 0;
  comment: string = '';
  currentUser: User;

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
  }

  setRating(star: number): void {
    if (this.rating === star) {
      // If the same star is clicked, reset the rating
      this.rating = 0;
    } else {
      // Otherwise, set the rating to the clicked star
      this.rating = star;
    }
  }

  submitRating(): void {
    console.log('Submitting rating:', {
      flightArrivalLocation: this.flight.arrivalLocation,
      rating: this.rating,
      comment: this.comment,
      user: this.currentUser
    }); // Dodajemo log za proveru
    this.onSubmit.emit({
      flightArrivalLocation: this.flight.arrivalLocation,
      rating: this.rating,
      comment: this.comment,
      user: this.currentUser
    });
  }
}
