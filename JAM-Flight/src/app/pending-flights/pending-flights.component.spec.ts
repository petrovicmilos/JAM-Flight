import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingFlightsComponent } from './pending-flights.component';

describe('PendingFlightsComponent', () => {
  let component: PendingFlightsComponent;
  let fixture: ComponentFixture<PendingFlightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingFlightsComponent]
    });
    fixture = TestBed.createComponent(PendingFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
