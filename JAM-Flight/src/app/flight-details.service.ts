import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Flight } from './flights-list/flights-list.model';

@Injectable({
  providedIn: 'root',
})
export class FlightDetailsService {
  private selectedFlightSubject = new BehaviorSubject<Flight>(null);
  selectedFlight$ = this.selectedFlightSubject.asObservable();

  setSelectedFlight(flight: Flight): void {
    this.selectedFlightSubject.next(flight);
  }
  
  getSelectedFlight(): Flight {
    return this.selectedFlightSubject.value;
  }

}