import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AppComponent } from '../../app.component';
import { DataService } from 'src/app/data.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
     /* user = {
      username: '',
      password: ''
    };
    constructor(private router: Router) {}
  
    // Define a list of valid user credentials (for demonstration purposes).
    validUsers = [
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' }
    ];
  
    loginFailed = false;
  
    login() {
      // Simulate a client-side login with validation.
      const foundUser = this.validUsers.find(user => user.username === this.user.username && user.password === this.user.password);
  
      if (foundUser) {
        this.loginFailed = false;
        // You can navigate to another page or perform further actions on successful login.
        console.log('Login successful.');
        this.router.navigate(['']);
      } else {
        this.loginFailed = true;
      }
    }  */

    errorExists = false;
    errorText = "";

  constructor(public userService: UserService, private router: Router, private AppComponent :  AppComponent, private snackBar: MatSnackBar, private DataService: DataService) {}

  ngOnInit(): void {
  }

  onSubmit(form : NgForm) {
    var email = form.value.email;
    var password = form.value.password;
    var user = this.userService.getUser(email);
    if(!user) {
      this.errorExists = true;
      this.errorText = "There is no registered user with this email: " + email;
      return;
    }

    var isPasswordValid = this.userService.isPasswordCorrect(email, password);
    if(!isPasswordValid) {
      this.errorExists = true;
      this.errorText = "Incorrect password!";
      return;
    }
    this.errorExists = false;
    //this.AppComponent.setLoggedIn(true);
    this.DataService.setLoggedInSubject();
    console.log(this.DataService.loggedInSubject$);
    if (this.DataService.loggedInSubject$) {
      this.snackBar.open('Successfull login!', 'Dismiss', {
        duration: 1000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
      });
      //return;
      setTimeout(() => {
        this.router.navigate(['']);
      }, 1000);
    }
    
  }
  }
