import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AppComponent } from '../../app.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  errorExists = false;
  errorText = "";

constructor(public userService: UserService, private router: Router, private AppComponent :  AppComponent ) {}

ngOnInit(): void {
}

onSubmit(form : NgForm) {
  var name = form.value.name;
  var email = form.value.email;
  var password = form.value.password;
  // var user = this.userService.getUser(email);
  var phone = form.value.phone;
  // if(!user) {
  //   this.errorExists = true;
  //   this.errorText = "There is no registered user with this email: " + email;
  //   return;
  // }

  var isPasswordValid = this.userService.isPasswordCorrect(email, password);
  if(!isPasswordValid) {
    this.errorExists = true;
    this.errorText = "Incorrect password!";
    return;
  }
  this.errorExists = false;
  this.router.navigate(['']);

  this.AppComponent.setLoggedIn(true);

}

}
