import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightHistoryComponent } from './flight-history.component';

describe('FlightHistoryComponent', () => {
  let component: FlightHistoryComponent;
  let fixture: ComponentFixture<FlightHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightHistoryComponent]
    });
    fixture = TestBed.createComponent(FlightHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
