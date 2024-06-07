import { Component } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
  providers: [
    provideAnimations(),
  ],
  animations: [
    // animation triggers go here
  ]
})
export class PopularComponent {

  cards = [
    {
      image: '../assets/Madrid.jpg',
      title: 'Madrid',
      price: 'From $30'
    },
    {
      image: '../assets/Paris.jpg',
      title: 'Paris',
      price: 'From $80'
    },
    {
      image: '../assets/shanghai.jpg',
      title: 'Shanghai',
      price: '$380'
    },
    {
      image: '../assets/new york.jpg',
      title: 'New York City',
      price: '$170'
    }
  ];

}
