import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightDetailsService } from '../flight-details.service';
import { Flight } from '../flights-list/flights-list.model';
import { CartService } from '../cart.service';
import { DataService } from '../data.service';
import { User } from '../auth/user.service';


@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  flight: Flight;
  loggedInUser: boolean = false;
  userRating: { rating: number, comment: string, user: User } = null;

  constructor(private route: ActivatedRoute, private flightDetailsService: FlightDetailsService, private cartService: CartService, private router: Router, public dataService: DataService) { }

  ngOnInit() {
    console.log('FlightDetailsComponent initialized');
    // Get the flight details from the service
    /*  this.flightDetailsService.selectedFlight$.subscribe((selectedFlight) => {
       this.flight = selectedFlight;
     }); */

    // Get the flight details from the service
    this.route.paramMap.subscribe(params => {
      const arrivalLocation = params.get('arrivalLocation');
      if (arrivalLocation) {
        this.dataService.getFlightByArrivalLocation(arrivalLocation).subscribe(flight => {
          this.flight = flight;
          this.flightDetailsService.setSelectedFlight(flight);
        });
      }
    });

    this.dataService.loggedInSubject$.subscribe(() => {
      this.loggedInUser = this.dataService.getLoggedInSubject();
    });
    
    const navigation = this.router.getCurrentNavigation();
    const state = window.history.state;
    if (state) {
      this.userRating = {
        rating: state.rating,
        comment: state.comment,
        user: state.user
      };
    }

  }



  addToCart() {
    if (this.flight) {
      this.cartService.addToCart(this.flight);
      this.router.navigate(['/cart']);
    }
  }
}
