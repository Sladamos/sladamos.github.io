import {ChangeDetectionStrategy, Component, inject, ViewContainerRef} from '@angular/core';
import {ExperienceSectionModel} from '../../model/experience-section-model';
import {ExperienceSectionsComponent} from '../experience-sections/experience-sections.component';
import {ExperienceItemComponent} from '../experience-item/experience-item.component';
import {ExperienceService} from '../../service/experience.service';
import {RuntimeService} from '../../../../core/shared/service/runtime.service';

@Component({
  selector: 'app-experience-page',
  imports: [
    ExperienceSectionsComponent,
    ExperienceItemComponent
  ],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'container__normal'
  }
})
export class ExperiencePageComponent {
  selectedSection?: ExperienceSectionModel;
  viewContainerRef: ViewContainerRef = inject(ViewContainerRef);
  runtimeService: RuntimeService = inject(RuntimeService);
  experienceService: ExperienceService = inject(ExperienceService);

  onSectionSelected(section: ExperienceSectionModel) {
    this.selectedSection = section;
    setTimeout(() => this.runtimeService.fixEmulatedEncapsulation(this.viewContainerRef))
  }
}
