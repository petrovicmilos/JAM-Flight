import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Flight } from '../flights-list/flights-list.model';

@Component({
  selector: 'app-pending-flights',
  templateUrl: './pending-flights.component.html',
  styleUrls: ['./pending-flights.component.css']
})
export class PendingFlightsComponent implements OnInit {
  pendingFlights: Flight[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.pendingFlights$.subscribe((flights) => {
      this.pendingFlights = flights;
    });
  }

  cancelFlight(flight: Flight) {
    this.cartService.cancelFlight(flight);
  }
}
