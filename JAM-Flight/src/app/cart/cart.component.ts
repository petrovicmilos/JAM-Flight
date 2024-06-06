// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Flight } from '../flights-list/flights-list.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {
  cartItems: Flight[] = [];
  cartTotalPrice: number = 0;

  constructor(private cartService: CartService, private snackBar: MatSnackBar, private router: Router) {}

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

  proceedToPayment() {
    if (confirm("Are you sure you want to proceed?")) {
      this.cartService.confirmPayment();
      this.snackBar.open('Payment successfull!', 'Dismiss', {
        duration: 1000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
      });
    setTimeout(() => {
      this.router.navigate(['journal']);
    }, 1000);
    } else {
      return false;
    };
    
  }
}
