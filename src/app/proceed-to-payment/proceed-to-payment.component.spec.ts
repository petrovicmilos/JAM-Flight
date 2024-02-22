import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedToPaymentComponent } from './proceed-to-payment.component';

describe('ProceedToPaymentComponent', () => {
  let component: ProceedToPaymentComponent;
  let fixture: ComponentFixture<ProceedToPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProceedToPaymentComponent]
    });
    fixture = TestBed.createComponent(ProceedToPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
