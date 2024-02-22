import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Flight } from '../flights-list/flights-list.model';

@Component({
  selector: 'app-flight-history',
  templateUrl: './flight-history.component.html',
  styleUrls: ['./flight-history.component.css']
})
export class FlightHistoryComponent {
  cartItems: Flight[] = [];
  cartTotalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });
  }

}
