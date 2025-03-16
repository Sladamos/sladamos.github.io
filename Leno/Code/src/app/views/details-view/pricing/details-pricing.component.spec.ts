import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPricingComponent } from './details-pricing.component';

describe('PricingComponent', () => {
  let component: DetailsPricingComponent;
  let fixture: ComponentFixture<DetailsPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsPricingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
