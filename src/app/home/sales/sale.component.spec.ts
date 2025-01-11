import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleComponent } from './sale.component';

describe('SalesComponent', () => {
  let component: SaleComponent;
  let fixture: ComponentFixture<SaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleComponent]
    });
    fixture = TestBed.createComponent(SaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
