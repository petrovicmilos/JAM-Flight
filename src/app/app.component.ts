import { Component, Injectable, OnInit } from '@angular/core';
import {UserService} from "./auth/user.service";
import AOS from 'aos'; 
import { Router, NavigationEnd} from '@angular/router'; 
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent implements OnInit {
  title = 'JAM-Flight';

  ngOnInit() {
    AOS.init();//AOS - 2
  }
  constructor(public userService: UserService,private router: Router){
    //subscribes every changes of your route
   this.router.events.subscribe((event) => {
       if (event instanceof NavigationEnd){
          //scroll to top
          window.scrollTo(0,0);
       }
    });
  };

  loggedIn : boolean = false;

  setLoggedIn( value : boolean){
    this.loggedIn = value;
  }
}
