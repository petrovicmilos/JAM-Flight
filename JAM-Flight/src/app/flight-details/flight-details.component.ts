import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FlightDetailsService } from '../flight-details.service';
import { Flight } from '../flights-list/flights-list.model';
import { CartService } from '../cart.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  flight: Flight;
  loggedInUser: boolean = false;

  constructor(private route: ActivatedRoute, private flightDetailsService: FlightDetailsService, private cartService: CartService, private router: Router, public dataService: DataService) {}

  ngOnInit() {
    // Get the flight details from the service
    this.flightDetailsService.selectedFlight$.subscribe((selectedFlight) => {
      this.flight = selectedFlight;
    });

    this.dataService.loggedInSubject$.subscribe(() => {
      this.loggedInUser = this.dataService.getLoggedInSubject();
     });
  }

  addToCart() {
    if (this.flight) {
      this.cartService.addToCart(this.flight);
      this.router.navigate(['/cart']);
    }
  }
}
