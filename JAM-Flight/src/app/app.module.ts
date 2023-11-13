import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvailableFlightsComponent } from './available-flights/available-flights.component';
import { BannerComponent } from './banner/banner.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlightsListComponent } from './flights-list/flights-list.component';
import { FooterComponent } from './footer/footer.component';
import { PopularComponent } from './popular/popular.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    AvailableFlightsComponent,
    BannerComponent,
    FlightsListComponent,
    FooterComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
