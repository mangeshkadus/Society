import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymaintenanceComponent } from './paymaintenance.component';

describe('PaymaintenanceComponent', () => {
  let component: PaymaintenanceComponent;
  let fixture: ComponentFixture<PaymaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
