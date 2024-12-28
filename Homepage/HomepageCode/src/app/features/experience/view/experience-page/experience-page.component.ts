import {Component, signal} from '@angular/core';
import {ExperienceSectionModel} from '../../model/experience-section-model';
import {ExperienceSectionsComponent} from '../experience-sections/experience-sections/experience-sections.component';

@Component({
  selector: 'app-experience-page',
  imports: [
    ExperienceSectionsComponent
  ],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.css',
  host: {
    'class': 'container__normal'
  }
})
export class ExperiencePageComponent {
  sections: ExperienceSectionModel[] = [
    {title: 'Job'},
    {title: 'Education'},
    {title: 'Other'}
  ]
}
