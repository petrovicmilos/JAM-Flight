// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Flight } from './flights-list/flights-list.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<Flight[]>([]);
  private cartItemCountSubject = new BehaviorSubject<number>(0);

  cartItems$ = this.cartItemsSubject.asObservable();
  cartItemCount$ = this.cartItemCountSubject.asObservable();

  addToCart(item: Flight) {
    const currentCartItems = this.cartItemsSubject.value || [];
    const updatedCartItems = [...currentCartItems, item];
    this.cartItemsSubject.next(updatedCartItems);

    this.updateCartItemCount(updatedCartItems.length);
  }

  removeFromCart(item: Flight) {
    const currentCartItems = this.cartItemsSubject.value || [];
    const updatedCartItems = currentCartItems.filter((cartItem) => cartItem !== item);
    this.cartItemsSubject.next(updatedCartItems);

    this.updateCartItemCount(updatedCartItems.length);
  }

  private updateCartItemCount(count: number) {
    this.cartItemCountSubject.next(count);
  }

  getCartItems() {
    return this.cartItemsSubject.value;
  }
}
