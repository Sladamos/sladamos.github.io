import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {CourseModel} from '../../model/course-model';
import {TechnologyChipComponent} from '../../../technology/view/technology-chip/technology-chip.component';
import {IssuerVerticalChipComponent} from '../../../issuer/view/issuer-vertical-chip/issuer-vertical-chip.component';
import {SafeResourceUrlPipe} from '../../../security/pipe/safe-resource-url.pipe';
import {PopupComponent} from '../../../shared/view/popup/popup.component';

@Component({
  selector: 'app-course-item',
  imports: [
    TechnologyChipComponent,
    IssuerVerticalChipComponent,
    SafeResourceUrlPipe,
    PopupComponent
  ],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {
  course = input.required<CourseModel>();
  isPopupVisible: any = false;
  pdfUrl = computed(() => `assets/resources/course/${this.course().certificateUrl}`);

  switchPdfVisibility() {
    this.isPopupVisible = !this.isPopupVisible;
  }
}
