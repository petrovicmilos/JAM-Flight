import { Component } from '@angular/core';
import {UserService} from "./auth/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JAM-Flight';

  constructor(public userService: UserService){};

  loggedIn : boolean = false;

  setLoggedIn( value : boolean){
    this.loggedIn = value;
  }
}
