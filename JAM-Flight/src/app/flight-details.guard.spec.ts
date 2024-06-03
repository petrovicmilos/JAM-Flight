import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { flightDetailsGuard } from './flight-details.guard';

describe('flightDetailsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => flightDetailsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
