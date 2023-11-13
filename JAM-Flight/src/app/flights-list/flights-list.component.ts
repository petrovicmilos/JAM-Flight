import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Flight } from './flights-list.model';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit{
  flights: Flight[] = [
    {
      airline: 'Turkish Airlines',
      departureLocation: 'Departure 1',
      arrivalLocation: 'Arrival 1',
      duration: '2 hours',
      distance: '500 miles',
      flightClass: 'Economy',
      availableSeats: 100,
      priceRange: '$100 - $200',
      rating: 4.5
    },
    {
      airline: 'Emirates',
      departureLocation: 'Departure 2',
      arrivalLocation: 'Arrival 2',
      duration: '3 hours',
      distance: '700 miles',
      flightClass: 'Business',
      availableSeats: 80,
      priceRange: '$300 - $500',
      rating: 4.8
    },
    {
      airline: 'Lufthansa',
      departureLocation: 'Departure 3',
      arrivalLocation: 'Arrival 3',
      duration: '2.5 hours',
      distance: '600 miles',
      flightClass: 'Economy',
      availableSeats: 120,
      priceRange: '$150 - $250',
      rating: 4.2
    },
    {
      airline: 'Qatar Airways',
      departureLocation: 'Departure 4',
      arrivalLocation: 'Arrival 4',
      duration: '4 hours',
      distance: '800 miles',
      flightClass: 'First Class',
      availableSeats: 50,
      priceRange: '$600 - $800',
      rating: 4.9
    },
    {
      airline: 'Delta Air Lines',
      departureLocation: 'Departure 5',
      arrivalLocation: 'Arrival 5',
      duration: '2.5 hours',
      distance: '600 miles',
      flightClass: 'Economy',
      availableSeats: 90,
      priceRange: '$120 - $220',
      rating: 4.4
    },
    {
      airline: 'British Airways',
      departureLocation: 'Departure 6',
      arrivalLocation: 'Arrival 6',
      duration: '3 hours',
      distance: '700 miles',
      flightClass: 'Business',
      availableSeats: 75,
      priceRange: '$280 - $480',
      rating: 4.7
    },
    {
      airline: 'American Airlines',
      departureLocation: 'Departure 7',
      arrivalLocation: 'Arrival 7',
      duration: '2 hours',
      distance: '500 miles',
      flightClass: 'Economy',
      availableSeats: 110,
      priceRange: '$110 - $210',
      rating: 4.3
    },
    {
      airline: 'Singapore Airlines',
      departureLocation: 'Departure 8',
      arrivalLocation: 'Arrival 8',
      duration: '3.5 hours',
      distance: '900 miles',
      flightClass: 'First Class',
      availableSeats: 60,
      priceRange: '$700 - $900',
      rating: 4.9
    },
    {
      airline: 'Air France',
      departureLocation: 'Departure 9',
      arrivalLocation: 'Arrival 9',
      duration: '2.5 hours',
      distance: '600 miles',
      flightClass: 'Economy',
      availableSeats: 95,
      priceRange: '$130 - $230',
      rating: 4.6
    },
    {
      airline: 'Cathay Pacific',
      departureLocation: 'Departure 10',
      arrivalLocation: 'Arrival 10',
      duration: '4 hours',
      distance: '800 miles',
      flightClass: 'Business',
      availableSeats: 70,
      priceRange: '$320 - $520',
      rating: 4.8
    }
  ];


  filteredFlights$: Observable<Flight[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // { filter } === [{filths}]
    // this.filteredFlights$ = this.dataService.getFilteredData(this.flights);

    this.dataService.filterCriteria$.pipe().subscribe((filterItem: Flight) => {
    //   console.log('filter', filterItem);
      this.filteredFlights$ = this.dataService.getFilteredData(this.flights);
    });


  }
}
