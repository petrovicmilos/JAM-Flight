import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Flight } from './flights-list.model';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { FlightDetailsService } from '../flight-details.service';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit{
  
  flights = this.dataService.flights;

  filteredFlights$: Observable<Flight[]>;

  constructor(private dataService: DataService, private cartService: CartService, private router: Router, private flightDetailsService: FlightDetailsService) {}

  ngOnInit():void {
    // { filter } === [{filths}]
    // this.filteredFlights$ = this.dataService.getFilteredData(this.flights);

    this.dataService.filterCriteria$.pipe().subscribe((filterItem: Flight) => {
    //   console.log('filter', filterItem);
      this.filteredFlights$ = this.dataService.getFilteredData(this.dataService.flights);
    });


  }
  addToCart(flightId: number) {
    const selectedFlight = this.dataService.flights.find((flight) => flight.id === flightId);

    if (selectedFlight) {
      this.cartService.addToCart(selectedFlight);
      //this.router.navigate(['/cart']);
    }
  }

  showFlightDetails(arrivalLocation: string) {
    const selectedFlight = this.dataService.flights.find((flight) => flight.arrivalLocation === arrivalLocation);
  
    if (selectedFlight) {
      this.flightDetailsService.setSelectedFlight(selectedFlight);  // Update the selected flight
      this.router.navigate(['/flight-details', arrivalLocation]);
    }
  }
}
