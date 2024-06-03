import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { DataService } from '../data.service';
import { AppComponent } from '../app.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../auth/user.service';
import { ProfileComponent } from '../auth/profile/profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItemCount: number = 0;
  loggedInUser: boolean = false;
  profileOpened: boolean = false;
  constructor(private router: Router, private cartService: CartService, private appComponent : AppComponent, public dataService: DataService, private snackBar: MatSnackBar, public userService: UserService, private dialog: MatDialog) {}

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

    openProfile(userId: number){
      this.profileOpened = true;
      
      const profileDialog = this.dialog.open(ProfileComponent, {
        disableClose: true,
        width: "35vw",
        data: {user: this.userService.getUserById(userId)}
      });

      profileDialog.afterClosed().subscribe(result => {
        this.profileOpened = false;
      })
    }
  //loggedInUser = this.appComponent.loggedIn;
  //loggedInUser = this.dataService.loggedInSubject$;
  
  

}
