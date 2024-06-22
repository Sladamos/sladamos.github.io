import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestimonialsComponent } from '../../testimonial/view/testimonials/testimonials.component';

@Component({
  selector: 'app-default-view',
  standalone: true,
  imports: [RouterModule, TestimonialsComponent],
  templateUrl: './default-view.component.html',
  styleUrl: './default-view.component.css'
})
export class DefaultViewComponent {

}
