import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FeaturesComponent } from './features/features.component';
import { HeroComponent } from './hero/hero.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';
import { DownloadComponent } from './download/download.component';
import { DetailsComponent } from './details/details.component';
import { PreviewComponent } from './preview/preview.component';

@Component({
  selector: 'app-default-view',
  standalone: true,
  imports: [RouterModule, TestimonialsComponent, FeaturesComponent, HeroComponent,
     ScreenshotsComponent, DownloadComponent, DetailsComponent, PreviewComponent],
  templateUrl: './default-view.component.html',
  styleUrl: './default-view.component.css'
})
export class DefaultViewComponent {

}
