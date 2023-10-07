import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableFlightsComponent } from './available-flights.component';

describe('AvailableFlightsComponent', () => {
  let component: AvailableFlightsComponent;
  let fixture: ComponentFixture<AvailableFlightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableFlightsComponent]
    });
    fixture = TestBed.createComponent(AvailableFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
