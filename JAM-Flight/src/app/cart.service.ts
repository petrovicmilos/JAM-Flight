import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Flight } from './flights-list/flights-list.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<Flight[]>([]);
  private cartItemCountSubject = new BehaviorSubject<number>(0);
  private cartTotalPriceSubject = new BehaviorSubject<number>(0);
  private pendingFlightsSubject = new BehaviorSubject<Flight[]>([]);

  cartItems$ = this.cartItemsSubject.asObservable();
  cartItemCount$ = this.cartItemCountSubject.asObservable();
  cartTotalPrice$ = this.cartTotalPriceSubject.asObservable();
  pendingFlights$ = this.pendingFlightsSubject.asObservable();

  addToCart(item: Flight) {
    const currentCartItems = this.cartItemsSubject.value || [];
    const updatedCartItems = [...currentCartItems, item];
    this.cartItemsSubject.next(updatedCartItems);

    this.updateCartItemCount(updatedCartItems.length);
    this.updateCartTotalPrice(updatedCartItems);
    this.addPendingFlight(item);
  }

  removeFromCart(item: Flight) {
    const currentCartItems = this.cartItemsSubject.value || [];
    const updatedCartItems = currentCartItems.filter((cartItem) => cartItem !== item);
    this.cartItemsSubject.next(updatedCartItems);

    this.updateCartItemCount(updatedCartItems.length);
    this.updateCartTotalPrice(updatedCartItems);
    this.removePendingFlight(item);
  }

  private updateCartItemCount(count: number) {
    this.cartItemCountSubject.next(count);
  }

  private updateCartTotalPrice(items: Flight[]) {
    const total = items.reduce((acc, item) => acc + this.getPriceAsNumber(item.price), 0);
    this.cartTotalPriceSubject.next(total);
  }

  private getPriceAsNumber(price: string): number {
    // Remove non-numeric characters and parse the remaining string as a float
    return parseFloat(price.replace(/[^0-9.]/g, ''));
  }

  private addPendingFlight(flight: Flight) {
    const currentPendingFlights = this.pendingFlightsSubject.value || [];
    const updatedPendingFlights = [...currentPendingFlights, flight];
    this.pendingFlightsSubject.next(updatedPendingFlights);
  }

  private removePendingFlight(flight: Flight) {
    const currentPendingFlights = this.pendingFlightsSubject.value || [];
    const updatedPendingFlights = currentPendingFlights.filter((pendingFlight) => pendingFlight !== flight);
    this.pendingFlightsSubject.next(updatedPendingFlights);
  }

  getCartItems() {
    return this.cartItemsSubject.value;
  }
}
