import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-canceled-flights',
  templateUrl: './canceled-flights.component.html',
  styleUrls: ['./canceled-flights.component.css']
})
export class CanceledFlightsComponent implements OnInit {
  flights = this.dataService.flights;
  
  constructor(private dataService: DataService) {}

  ngOnInit():void { 
    
    console.log(this.flights);
  }
}
