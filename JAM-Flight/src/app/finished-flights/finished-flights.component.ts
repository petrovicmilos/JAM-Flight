import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Flight } from '../flights-list/flights-list.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService, User } from '../auth/user.service';

@Component({
  selector: 'app-finished-flights',
  templateUrl: './finished-flights.component.html',
  styleUrls: ['./finished-flights.component.css'],
  animations: [ // Dodavanje animacija
    trigger('slideToggle', [
      state('open', style({
        height: '*',
        opacity: 1,
        padding: '10px'
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
        padding: '0px 10px'
      })),
      transition('open <=> closed', [
        animate('0.3s ease-in-out')
      ])
    ])
  ]
})
export class FinishedFlightsComponent implements OnInit {
  flights: Flight[] = []; 
  currentUser: User;

  constructor(private dataService: DataService, private router: Router, private snackBar: MatSnackBar, private userService: UserService) {}

  ngOnInit(): void { 
    // Dohvatanje letova iz servisa
    this.flights = this.dataService.flights.slice(0, 4).map(flight => ({ ...flight, showRatingForm: false }));

  }

  toggleRatingForm(flight: Flight) {
    flight.showRatingForm = !flight.showRatingForm;
  }

  handleRatingSubmit(event) {
    console.log('Ovo je iz finished flights poslato',event);
    this.snackBar.open('Your rating is submited!', 'Dismiss', {
      duration: 2000, // Duration in milliseconds
      verticalPosition: 'bottom', // Position of the snackbar
      horizontalPosition: 'center', // Position of the snackbar
    });
    setTimeout(() => {
      this.router.navigate(['/flight-details', event.flightArrivalLocation], { 
        state: { rating: event.rating, comment: event.comment, user: event.user },
        replaceUrl: true
      });
    
    }, 1000);
    
  }
}
