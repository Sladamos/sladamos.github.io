import { Component } from '@angular/core';
import { InnerHeaderComponent } from '../../utils/view/inner-header/inner-header.component';

@Component({
  selector: 'app-details-view',
  standalone: true,
  imports: [InnerHeaderComponent],
  templateUrl: './details-view.component.html',
  styleUrl: './details-view.component.css'
})
export class DetailsViewComponent {

}
