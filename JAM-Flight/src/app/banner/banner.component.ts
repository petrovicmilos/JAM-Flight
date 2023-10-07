import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-search',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  searchCriteria = {
    airCompany: '',
    from: '',
    to: '',
    price: '',
    time: '',
    distance: '',
    seats: '',
    rating: ''
  };

  searchInputs = [
    { label: 'Air Company', value: '' },
    { label: 'From', value: '' },
    { label: 'To', value: '' },
    { label: 'Price', value: '' },
    { label: 'Time', value: '' },
    { label: 'Distance', value: '' },
    { label: 'Number of Seats', value: '' },
    { label: 'Rating', value: '' },
  ];

  advancedSearch = false;

  toggleAdvancedSearch() {
    this.advancedSearch = !this.advancedSearch;
    console.log("MOOREE");
  }

  onSubmit() {
    // Handle form submission here, e.g., send a request to the server with the search criteria
    console.log('Search criteria:', this.searchCriteria);
  }
}
