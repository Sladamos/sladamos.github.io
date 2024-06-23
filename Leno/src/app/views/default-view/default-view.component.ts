import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FeaturesComponent } from './features/features.component';
import { HeroComponent } from './hero/hero.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';

@Component({
  selector: 'app-default-view',
  standalone: true,
  imports: [RouterModule, TestimonialsComponent, FeaturesComponent, HeroComponent, ScreenshotsComponent],
  templateUrl: './default-view.component.html',
  styleUrl: './default-view.component.css'
})
export class DefaultViewComponent {

}
