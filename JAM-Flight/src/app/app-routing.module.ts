import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { FaqComponent } from './faq/faq.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component'; 
import { FlightDetailsGuard } from './flight-details.guard';
import { JournalComponent } from './journal/journal.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'cart', component: CartComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'flight-details/:arrivalLocation', component: FlightDetailsComponent, canActivate: [FlightDetailsGuard],},
  { path: 'journal', component: JournalComponent},
  { path: '',redirectTo: 'homepage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
