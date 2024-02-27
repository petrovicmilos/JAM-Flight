// flight-details.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FlightDetailsService } from './flight-details.service';

@Injectable({
  providedIn: 'root',
})
export class FlightDetailsGuard implements CanActivate {
  constructor(private flightDetailsService: FlightDetailsService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const selectedFlight = this.flightDetailsService.getSelectedFlight();

    if (selectedFlight) {
      return true;
    } else {
      // Redirect to some other page if the user tries to access flight-details directly
      return this.router.parseUrl('homepage');
    }
  }
}
