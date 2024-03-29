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
  flights: Flight[] = [
    {
      id: 0,
      airline: 'Turkish Airlines',
      departureDate: '2024-02-15',
      departureTime: '10:00',
      arrivalTime: '12:00',
      departureLocation: 'Belgrade',
      arrivalLocation: 'Barcelona',
      duration: '2 hours',
      distance: '700 miles',
      flightClass: 'Economy',
      availableSeats: 100,
      price: '$100',
      rating: 4.5
    },
    {
      id: 1,
      airline: 'Emirates',
      departureDate: '2024-02-16',
      departureTime: '12:30',
      arrivalTime: '15:30',
      departureLocation: 'Belgrade',
      arrivalLocation: 'Paris',
      duration: '3 hours',
      distance: '900 miles',
      flightClass: 'Business',
      availableSeats: 80,
      price: '$300',
      rating: 4.8
    },
    {
      id: 2,
      airline: 'Lufthansa',
      departureDate: '2024-02-17',
      departureTime: '14:00',
      arrivalTime: '16:30',
      departureLocation: 'Belgrade',
      arrivalLocation: 'Rome',
      duration: '2.5 hours',
      distance: '800 miles',
      flightClass: 'Economy',
      availableSeats: 120,
      price: '$150',
      rating: 4.2
    },
    {
      id: 3,
      airline: 'Qatar Airways',
      departureDate: '2024-02-18',
      departureTime: '08:00',
      arrivalTime: '12:00',
      departureLocation: 'Belgrade',
      arrivalLocation: 'Berlin',
      duration: '4 hours',
      distance: '1000 miles',
      flightClass: 'First Class',
      availableSeats: 50,
      price: '$600',
      rating: 4.9
    },
    {
      id: 4,
      airline: 'Delta Air Lines',
      departureDate: '2024-02-19',
      departureTime: '13:00',
      arrivalTime: '15:30',
      departureLocation: 'Belgrade',
      arrivalLocation: 'Vienna',
      duration: '2.5 hours',
      distance: '800 miles',
      flightClass: 'Economy',
      availableSeats: 90,
      price: '$120',
      rating: 4.4
    },
    {
      id: 5,
      airline: 'British Airways',
      departureDate: '2024-02-20',
      departureTime: '16:00',
      arrivalTime: '19:00',
      departureLocation: 'Belgrade',
      arrivalLocation: 'Amsterdam',
      duration: '3 hours',
      distance: '900 miles',
      flightClass: 'Business',
      availableSeats: 75,
      price: '$280',
      rating: 4.7
    },
    {
      id: 6,
      airline: 'American Airlines',
      departureDate: '2024-02-21',
      departureTime: '10:30',
      arrivalTime: '12:30',
      departureLocation: 'Belgrade',
      arrivalLocation: 'Prague',
      duration: '2 hours',
      distance: '700 miles',
      flightClass: 'Economy',
      availableSeats: 110,
      price: '$110',
      rating: 4.3
    },
    {
      id: 7,
      airline: 'Singapore Airlines',
      departureDate: '2024-02-22',
      departureTime: '15:30',
      arrivalTime: '19:00',
      departureLocation: 'Belgrade',
      arrivalLocation: 'Zurich',
      duration: '3.5 hours',
      distance: '1100 miles',
      flightClass: 'First Class',
      availableSeats: 60,
      price: '$700',
      rating: 4.9
    },
    {
      id: 8,
      airline: 'Air France',
      departureDate: '2024-02-23',
      departureTime: '14:00',
      arrivalTime: '16:30',
      departureLocation: 'Belgrade',
      arrivalLocation: 'Budapest',
      duration: '2.5 hours',
      distance: '800 miles',
      flightClass: 'Economy',
      availableSeats: 95,
      price: '$130',
      rating: 4.6
    },
    {
      id: 9,
      airline: 'Cathay Pacific',
      departureDate: '2024-02-24',
      departureTime: '11:00',
      arrivalTime: '15:00',
      departureLocation: 'Belgrade',
      arrivalLocation: 'Copenhagen',
      duration: '4 hours',
      distance: '1200 miles',
      flightClass: 'Business',
      availableSeats: 70,
      price: '$340',
      rating: 4.8
    }
  ];


  filteredFlights$: Observable<Flight[]>;

  constructor(private dataService: DataService, private cartService: CartService, private router: Router, private flightDetailsService: FlightDetailsService) {}

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

  showFlightDetails(arrivalLocation: string) {
    const selectedFlight = this.flights.find((flight) => flight.arrivalLocation === arrivalLocation);
  
    if (selectedFlight) {
      this.flightDetailsService.setSelectedFlight(selectedFlight);  // Update the selected flight
      this.router.navigate(['/flight-details', arrivalLocation]);
    }
  }
}
