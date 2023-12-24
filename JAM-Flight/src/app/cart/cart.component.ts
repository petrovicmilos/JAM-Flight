// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Flight } from '../flights-list/flights-list.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {
  cartItems: Flight[] = [];
  cartTotalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
      this.updateCartTotalPrice();
    });
  }

  removeFromCart(item: Flight) {
    this.cartService.removeFromCart(item);
  }

  private updateCartTotalPrice() {
    this.cartService.cartTotalPrice$.subscribe((total) => {
      this.cartTotalPrice = total;
    });
  }
}
