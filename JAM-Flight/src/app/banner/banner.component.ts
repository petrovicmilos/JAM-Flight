import {Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { Flight } from '../flights-list/flights-list.model';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-flight-search',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit{

  searchCriteria:Flight= {
    id: null,
    airline: '',
    departureLocation: '',
    arrivalLocation: '',
    duration: '',
    distance: '',
    flightClass: '',
    availableSeats: 0,
    price: '',
    rating: 0
  };

  // searchInputs = [
  //   { label: 'Air Company', value: 'airCompany' },
  //   { label: 'From', value: 'from' },
  //   { label: 'To', value: 'to' },
  //   { label: 'Price', value: 'price' },
  //   { label: 'Time', value: 'time' },
  //   { label: 'Distance', value: 'distance' },
  //   { label: 'Number of Seats', value: 'seats' },
  //   { label: 'Rating', value: 'rating' },
  // ];

  form:FormGroup;
  constructor(private dataService: DataService, private formBuilder:FormBuilder) {}

  ngOnInit() : void {
    this.form = this.formBuilder.group({
      airline: new FormControl (),
      departureLocation: new FormControl (),
      arrivalLocation: new FormControl (),
      duration: new FormControl (),
      distance: new FormControl (),
      flightClass: new FormControl (),
      availableSeats: new FormControl (),
      price: new FormControl (),
      rating: new FormControl ()
    });
  }

  filterTable() : void {
    //console.log(this.form.value);
    if (this.form.invalid) return;
    this.dataService.setFilterCriteria(this.form.value);
  }
}
