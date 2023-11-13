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
        let a = data.filter((row: Flight) => {
          return Object.keys(filterCriteria).every(key => {
            const value = row[key];
            const filterValue = filterCriteria[key];
            if (!filterValue) return;
            return value.toString().includes(filterValue);
          });
        });
        console.log('a', a);
        return  a;
      })
    );
  }
}
