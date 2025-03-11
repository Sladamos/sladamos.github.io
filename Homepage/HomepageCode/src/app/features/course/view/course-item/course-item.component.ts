import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {CourseModel} from '../../model/course-model';
import {TechnologyChipComponent} from '../../../technology/view/technology-chip/technology-chip.component';
import {IssuerVerticalChipComponent} from '../../../issuer/view/issuer-vertical-chip/issuer-vertical-chip.component';

@Component({
  selector: 'app-course-item',
  imports: [
    TechnologyChipComponent,
    IssuerVerticalChipComponent
  ],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {
  course = input.required<CourseModel>();
}
