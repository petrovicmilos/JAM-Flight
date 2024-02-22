import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightDetailsService } from '../flight-details.service';
import { Flight } from '../flights-list/flights-list.model';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  flight: Flight;

  constructor(private route: ActivatedRoute, private flightDetailsService: FlightDetailsService) {}

  ngOnInit() {
    // Get the flight details from the service
    this.flightDetailsService.selectedFlight$.subscribe((selectedFlight) => {
      this.flight = selectedFlight;
    });
  }
}
