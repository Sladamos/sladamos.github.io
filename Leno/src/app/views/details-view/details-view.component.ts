import { Component } from '@angular/core';
import { InnerHeaderComponent } from '../../utils/view/inner-header/inner-header.component';
import { DetailsFeaturesComponent } from './features/details-features.component';
import { DetailsPricingComponent } from './pricing/details-pricing.component';

@Component({
  selector: 'app-details-view',
  standalone: true,
  imports: [InnerHeaderComponent, DetailsFeaturesComponent, DetailsPricingComponent],
  templateUrl: './details-view.component.html',
  styleUrl: './details-view.component.css'
})
export class DetailsViewComponent {

}
