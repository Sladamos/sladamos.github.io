import {ChangeDetectionStrategy, Component, HostBinding, inject, input} from '@angular/core';
import {ExperienceSectionItem} from '../../model/experience-section-item';
import {ScreenTypeService} from '../../../shared/service/screen-type.service';

@Component({
  selector: 'app-experience-item',
  imports: [],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceItemComponent {
  screenTypeService = inject(ScreenTypeService);
  item = input.required<ExperienceSectionItem>();

  @HostBinding('class')
  get containerClass() {
    return this.screenTypeService.isNotDesktop() ? 'container__normal' : 'container__tiny';
  }
}
