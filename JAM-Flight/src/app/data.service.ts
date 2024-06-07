import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Flight } from './flights-list/flights-list.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
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
      image: '../assets/Barcelona.jpg',
      rating: 4.5,
      comment: '',
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
      image: '../assets/Paris.jpg',
      rating: 4.8,
      comment: ''
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
      image: '../assets/Rome.jpg',
      rating: 4.2,
      comment: ''
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
      image: '../assets/Berlin.jpg',
      rating: 4.9,
      comment: ''
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
      image: '../assets/Vienna.jpg',
      rating: 4.4,
      comment: ''
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
      image: '../assets/Amsterdam.jpg',
      rating: 4.7,
      comment: ''
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
      image: '../assets/Prague.jpg',
      rating: 4.3,
      comment: ''
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
      image: '../assets/Zurich.jpg',
      rating: 4.9,
      comment: ''
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
      image: '../assets/Budapest.jpg',
      rating: 4.6,
      comment: ''
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
      image: '../assets/Copenhagen.jpg',
      rating: 4.8,
      comment: ''
    }
  ];
  private filterCriteriaSubject = new BehaviorSubject<Flight>(null);
  filterCriteria$ = this.filterCriteriaSubject.asObservable();

  setFilterCriteria(filterCriteria: Flight) : void {
    this.filterCriteriaSubject.next(filterCriteria);
  }
  getFilteredData(data: Flight[]): Observable<Flight[]> {
    return this.filterCriteria$.pipe(
      map((filterCriteria: Flight) => {
        return data?.filter((row: Flight) => {
          return Object?.keys(filterCriteria).every(key => {
            const value = row[key]?.toString().toLowerCase();
            const filterValue = filterCriteria[key]?.toString().toLowerCase();
            if (!filterValue) return true; // Keep the row if there is no filter value
            return value.toString().includes(filterValue);
          });
        });
      })
    );
  }

  //private loggedInSubject : BehaviorSubject<boolean>;
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  loggedInSubject$ = this.loggedInSubject.asObservable();
  public setLoggedInSubject(){
    //this.loggedInSubject.next(!this.loggedInSubject.value);
    this.loggedInSubject.next(true);
  }
  public getLoggedInSubject(){
    return this.loggedInSubject.value;
  }

  getFlightByArrivalLocation(arrivalLocation: string): Observable<Flight> {
    const flight = this.flights.find(f => f.arrivalLocation === arrivalLocation);
    return of(flight);
  }
}
