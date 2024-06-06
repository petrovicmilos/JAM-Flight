import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import { Flight } from '../flights-list/flights-list.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-canceled-flights',
  templateUrl: './canceled-flights.component.html',
  styleUrls: ['./canceled-flights.component.css']
})
export class CanceledFlightsComponent implements OnInit {
  canceledFlights$: Observable<Flight[]>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.canceledFlights$ = this.cartService.canceledFlights$;
  }
}
