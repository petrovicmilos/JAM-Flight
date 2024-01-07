import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Flight } from './flights-list.model';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit{
  flights: Flight[] = [
    {
      id: 0,
      airline: 'Turkish Airlines',
      departureLocation: 'Departure 1',
      arrivalLocation: 'Arrival 1',
      duration: '2 hours',
      distance: '500 miles',
      flightClass: 'Economy',
      availableSeats: 100,
      price: '$100',
      rating: 4.5
    },
    {
      id: 1,
      airline: 'Emirates',
      departureLocation: 'Departure 2',
      arrivalLocation: 'Arrival 2',
      duration: '3 hours',
      distance: '700 miles',
      flightClass: 'Business',
      availableSeats: 80,
      price: '$300',
      rating: 4.8
    },
    {
      id: 2,
      airline: 'Lufthansa',
      departureLocation: 'Departure 3',
      arrivalLocation: 'Arrival 3',
      duration: '2.5 hours',
      distance: '600 miles',
      flightClass: 'Economy',
      availableSeats: 120,
      price: '$150',
      rating: 4.2
    },
    {
      id: 3,
      airline: 'Qatar Airways',
      departureLocation: 'Departure 4',
      arrivalLocation: 'Arrival 4',
      duration: '4 hours',
      distance: '800 miles',
      flightClass: 'First Class',
      availableSeats: 50,
      price: '$600',
      rating: 4.9
    },
    {
      id: 4,
      airline: 'Delta Air Lines',
      departureLocation: 'Departure 5',
      arrivalLocation: 'Arrival 5',
      duration: '2.5 hours',
      distance: '600 miles',
      flightClass: 'Economy',
      availableSeats: 90,
      price: '$120',
      rating: 4.4
    },
    {
      id: 5,
      airline: 'British Airways',
      departureLocation: 'Departure 6',
      arrivalLocation: 'Arrival 6',
      duration: '3 hours',
      distance: '700 miles',
      flightClass: 'Business',
      availableSeats: 75,
      price: '$280',
      rating: 4.7
    },
    {
      id: 6,
      airline: 'American Airlines',
      departureLocation: 'Departure 7',
      arrivalLocation: 'Arrival 7',
      duration: '2 hours',
      distance: '500 miles',
      flightClass: 'Economy',
      availableSeats: 110,
      price: '$110',
      rating: 4.3
    },
    {
      id: 7,
      airline: 'Singapore Airlines',
      departureLocation: 'Departure 8',
      arrivalLocation: 'Arrival 8',
      duration: '3.5 hours',
      distance: '900 miles',
      flightClass: 'First Class',
      availableSeats: 60,
      price: '$700',
      rating: 4.9
    },
    {
      id: 8,
      airline: 'Air France',
      departureLocation: 'Departure 9',
      arrivalLocation: 'Arrival 9',
      duration: '2.5 hours',
      distance: '600 miles',
      flightClass: 'Economy',
      availableSeats: 95,
      price: '$130',
      rating: 4.6
    },
    {
      id: 9,
      airline: 'Cathay Pacific',
      departureLocation: 'Departure 10',
      arrivalLocation: 'Arrival 10',
      duration: '4 hours',
      distance: '800 miles',
      flightClass: 'Business',
      availableSeats: 70,
      price: '$340',
      rating: 4.8
    }
  ];


  filteredFlights$: Observable<Flight[]>;

  constructor(private dataService: DataService, private cartService: CartService, private router: Router) {}

  ngOnInit() {
    // { filter } === [{filths}]
    // this.filteredFlights$ = this.dataService.getFilteredData(this.flights);

    this.dataService.filterCriteria$.pipe().subscribe((filterItem: Flight) => {
    //   console.log('filter', filterItem);
      this.filteredFlights$ = this.dataService.getFilteredData(this.flights);
    });


  }
  addToCart(flightId: number) {
    const selectedFlight = this.flights.find((flight) => flight.id === flightId);

    if (selectedFlight) {
      this.cartService.addToCart(selectedFlight);
      //this.router.navigate(['/cart']);
    }
  }
}
