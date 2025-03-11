import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {CourseModel} from '../../model/course-model';
import {TechnologyChipComponent} from '../../../technology/view/technology-chip/technology-chip.component';
import {IssuerVerticalChipComponent} from '../../../issuer/view/issuer-vertical-chip/issuer-vertical-chip.component';
import {SafeResourceUrlPipe} from '../../../security/pipe/safe-resource-url.pipe';
import {PopupComponent} from '../../../shared/view/popup/popup.component';
import {LoadingSpinnerComponent} from '../../../shared/view/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-course-item',
  imports: [
    TechnologyChipComponent,
    IssuerVerticalChipComponent,
    SafeResourceUrlPipe,
    PopupComponent,
    LoadingSpinnerComponent
  ],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {
  course = input.required<CourseModel>();
  isPopupVisible: any = false;
  isPdfLoading: any = true;
  pdfUrl = computed(() => `assets/resources/course/${this.course().certificateUrl}`);

  switchPdfVisibility() {
    this.isPdfLoading = true;
    this.isPopupVisible = !this.isPopupVisible;
  }

  onPdfLoad() {
    this.isPdfLoading = false;
  }

  openPdfInNewTab() {
    window.open(this.pdfUrl(), '_blank');
  }
}
