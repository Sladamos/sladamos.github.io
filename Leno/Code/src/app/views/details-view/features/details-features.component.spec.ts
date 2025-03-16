import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFeaturesComponent } from './details-features.component';

describe('FeaturesComponent', () => {
  let component: DetailsFeaturesComponent;
  let fixture: ComponentFixture<DetailsFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
