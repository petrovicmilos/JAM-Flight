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

signUpObj: any = {
  name: '',
  email: '' ,
  password: '' ,
  phone: ''
}

onSubmit(form : NgForm) {
  this.userService.getUser
  
 
  this.errorExists = false;
  this.router.navigate(['']);

  this.AppComponent.setLoggedIn(true);

}

}
