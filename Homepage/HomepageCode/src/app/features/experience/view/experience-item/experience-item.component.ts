import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {ExperienceSectionItem} from '../../model/experience-section-item';
import {ScreenTypeService} from '../../../../core/shared/service/screen-type.service';

@Component({
  selector: 'app-experience-item',
  imports: [],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.container__normal]': 'screenTypeService.isNotDesktop()',
    '[class.container__tiny]': '!screenTypeService.isNotDesktop()'
  }
})
export class ExperienceItemComponent {
  screenTypeService = inject(ScreenTypeService);
  item = input.required<ExperienceSectionItem>();
}
