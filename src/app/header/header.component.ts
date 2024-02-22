import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { DataService } from '../data.service';
import { AppComponent } from '../app.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItemCount: number = 0;
  loggedInUser: boolean = false;
  constructor(private router: Router, private cartService: CartService, private appComponent : AppComponent, public dataService: DataService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.cartService.cartItemCount$.subscribe((count) => {
      this.cartItemCount = count;
    });
    console.log(typeof(this.dataService.getLoggedInSubject()));
    console.log(this.dataService.getLoggedInSubject());
   this.dataService.loggedInSubject$.subscribe(() => {
    this.loggedInUser = this.dataService.getLoggedInSubject();
   });
  }

  signOut(){
    this.loggedInUser = false;
    this.snackBar.open('You have successfully signed out!', 'Dismiss', {
      duration: 1000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });}
  //loggedInUser = this.appComponent.loggedIn;
  //loggedInUser = this.dataService.loggedInSubject$;
  
  

}
