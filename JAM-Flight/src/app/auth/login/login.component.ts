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
    // console.log(this.DataService.loggedInSubject$);
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
