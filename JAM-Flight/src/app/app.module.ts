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
import {HeaderComponent} from "./header/header.component";
import { UserService } from './auth/user.service';
import {HomepageComponent} from "./homepage/homepage.component";
import {LoginComponent} from "./auth/login/login.component";
import {SignupComponent} from "./auth/signup/signup.component";
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FaqComponent } from './faq/faq.component';
import { BlogComponent } from './blog/blog.component';
import { FlightHistoryComponent } from './flight-history/flight-history.component';

@NgModule({
  declarations: [
    AppComponent,
    AvailableFlightsComponent,
    BannerComponent,
    FlightsListComponent,
    FooterComponent,
    PopularComponent,
    HeaderComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    ContactComponent,
    FaqComponent,
    BlogComponent,
    FlightHistoryComponent
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
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  providers: [DataService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
