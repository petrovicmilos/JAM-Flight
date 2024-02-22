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
  phone: ''
}

onSubmit(form : NgForm) {
  /*this.userService.getUser
  
 
  this.errorExists = false;
  this.router.navigate(['']);

  this.AppComponent.setLoggedIn(true);*/

  if(!this.userService.getUser(form.value.email)){
    this.errorExists = false;
    var newUser = this.userService.registerUser(
      form.value.name,
      form.value.email,
      form.value.password,
      form.value.phone
    );

    this.router.navigate([''])
  } else{
    this.errorExists = true;
    this.errorText = "User with given email already exists!"
  }
  //this.AppComponent.setLoggedIn(true);
  this.DataService.setLoggedInSubject();
}


}
