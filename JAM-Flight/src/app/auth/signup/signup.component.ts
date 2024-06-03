import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AppComponent } from '../../app.component';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  errorExists = false;
  errorText = "";

constructor(public userService: UserService, private router: Router, private AppComponent :  AppComponent, private DataService: DataService ) {}

ngOnInit(): void {
}

signUpObj: any = {
  name: '',
  email: '' ,
  password: '' ,
  phone: '' ,
  address: '',
  date: ''
}

isOnlyWords(input: string): boolean{
  const regex = /^[a-zA-Z\s]*$/;
  return regex.test(input);
}

validatePassword(password: string): boolean {
  const isLengthValid = password.length > 6;
  const hasNumber = /\d/.test(password);

  return isLengthValid && hasNumber;
}

isValidPhoneNumber(phoneNumber: string): boolean {
  const regex = /^\+\d+$/;
  return regex.test(phoneNumber);
}

onSubmit(form : NgForm) {
  /*this.userService.getUser
  
 
  this.errorExists = false;
  this.router.navigate(['']);

  this.AppComponent.setLoggedIn(true);*/

  /*if(!this.userService.getUser(form.value.email)){
    this.errorExists = false;
    var newUser = this.userService.registerUser(
      form.value.name,
      form.value.email,
      form.value.password,
      form.value.phone,
      form.value.address,
      form.value.date
    );

    this.router.navigate(['']);
    this.DataService.setLoggedInSubject();
  } else{
    this.errorExists = true;
    this.errorText = "User with given email already exists!"
  }*/

  var name = form.value.name;
  var email = form.value.email;
  var password = form.value.password;
  var phone = form.value.phone;
  var address = form.value.address;
  var date = form.value.date;

  if(this.userService.getUser(email)){
    this.errorExists = true;
    this.errorText = "User with given email already exists"
  } else if(!this.isOnlyWords(name)){
    this.errorExists = true;
    this.errorText = "Your username can't contain numbers of special characters."
  } else if(!this.validatePassword(password)){
    this.errorExists = true;
    this.errorText = "Your password needs to have more than six characters and one number."
  } else if(!this.isValidPhoneNumber(phone)){
    this.errorExists = true;
    this.errorText = "Your phone number is in the wrong format!"
  } else if(this.userService.getUser(phone)){
    this.errorExists = true;
    this.errorText = "User with given phone number already exists!"
  } else{
    this.errorExists = false;
    var newUser = this.userService.registerUser(
      form.value.name,
      form.value.email,
      form.value.password,
      form.value.phone,
      form.value.address,
      form.value.date);
    this.router.navigate(['']);
    this.DataService.setLoggedInSubject();
  }
  //this.AppComponent.setLoggedIn(true);
  
}



}
