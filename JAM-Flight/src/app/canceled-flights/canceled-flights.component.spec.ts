import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanceledFlightsComponent } from './canceled-flights.component';

describe('CanceledFlightsComponent', () => {
  let component: CanceledFlightsComponent;
  let fixture: ComponentFixture<CanceledFlightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanceledFlightsComponent]
    });
    fixture = TestBed.createComponent(CanceledFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
