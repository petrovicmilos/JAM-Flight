import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Flight } from './flights-list/flights-list.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private filterCriteriaSubject = new BehaviorSubject<Flight>(null);
  filterCriteria$ = this.filterCriteriaSubject.asObservable();

  setFilterCriteria(filterCriteria: Flight) : void {
    this.filterCriteriaSubject.next(filterCriteria);
  }
  getFilteredData(data: Flight[]): Observable<Flight[]> {
    return this.filterCriteria$.pipe(
      map((filterCriteria: Flight) => {
        return data.filter((row: Flight) => {
          return Object.keys(filterCriteria).every(key => {
            const value = row[key]?.toString().toLowerCase();
            const filterValue = filterCriteria[key]?.toString().toLowerCase();
            if (!filterValue) return true; // Keep the row if there is no filter value
            return value.toString().includes(filterValue);
          });
        });
      })
    );
  }
}
