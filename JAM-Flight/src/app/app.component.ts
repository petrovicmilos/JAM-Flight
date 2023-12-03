import { Component, OnInit } from '@angular/core';
import {UserService} from "./auth/user.service";
import AOS from 'aos'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JAM-Flight';

  ngOnInit() {
    AOS.init();//AOS - 2
  }
  constructor(public userService: UserService){};

  loggedIn : boolean = false;

  setLoggedIn( value : boolean){
    this.loggedIn = value;
  }
}
