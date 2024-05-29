import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-finished-flights',
  templateUrl: './finished-flights.component.html',
  styleUrls: ['./finished-flights.component.css']
})
export class FinishedFlightsComponent implements OnInit {
  flights = this.dataService.flights;
  
  constructor(private dataService: DataService) {}

  ngOnInit():void { 
    
    console.log(this.flights);
    this.flights = this.flights.slice(0, 4);
  }
}
