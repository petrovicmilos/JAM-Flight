// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Flight } from './flights-list/flights-list.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<Flight[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(item: Flight) {
    const currentCartItems = this.cartItemsSubject.value || [];
    const updatedCartItems = [...currentCartItems, item];
    this.cartItemsSubject.next(updatedCartItems);
  }

  removeFromCart(item: Flight) {
    const currentCartItems = this.cartItemsSubject.value || [];
    const updatedCartItems = currentCartItems.filter((cartItem) => cartItem !== item);
    this.cartItemsSubject.next(updatedCartItems);
  }

  getCartItems() {
    return this.cartItemsSubject.value;
  }
}
