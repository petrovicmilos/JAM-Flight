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
  private cartTotalPriceSubject = new BehaviorSubject<number>(0);

  cartItems$ = this.cartItemsSubject.asObservable();
  cartItemCount$ = this.cartItemCountSubject.asObservable();
  cartTotalPrice$ = this.cartTotalPriceSubject.asObservable();

  addToCart(item: Flight) {
    const currentCartItems = this.cartItemsSubject.value || [];
    const updatedCartItems = [...currentCartItems, item];
    this.cartItemsSubject.next(updatedCartItems);

    this.updateCartItemCount(updatedCartItems.length);
    this.updateCartTotalPrice(updatedCartItems);
  }

  removeFromCart(item: Flight) {
    const currentCartItems = this.cartItemsSubject.value || [];
    const updatedCartItems = currentCartItems.filter((cartItem) => cartItem !== item);
    this.cartItemsSubject.next(updatedCartItems);

    this.updateCartItemCount(updatedCartItems.length);
    this.updateCartTotalPrice(updatedCartItems);
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

  getCartItems() {
    return this.cartItemsSubject.value;
  }
}
