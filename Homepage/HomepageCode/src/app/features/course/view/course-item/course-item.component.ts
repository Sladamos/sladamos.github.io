import {ChangeDetectionStrategy, Component, computed, inject, input, signal, ViewContainerRef} from '@angular/core';
import {CourseModel} from '../../model/course-model';
import {TechnologyChipComponent} from '../../../technology/view/technology-chip/technology-chip.component';
import {IssuerVerticalChipComponent} from '../../../issuer/view/issuer-vertical-chip/issuer-vertical-chip.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {PopupComponent} from '../../../../core/shared/view/popup/popup.component';
import {LoadingSpinnerComponent} from '../../../../core/shared/view/loading/loading-spinner/loading-spinner.component';
import {RuntimeService} from '../../../../core/shared/service/runtime.service';

@Component({
  selector: 'app-course-item',
  imports: [
    TechnologyChipComponent,
    IssuerVerticalChipComponent,
    PopupComponent,
    LoadingSpinnerComponent,
    PdfViewerModule
  ],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {
  viewContainerRef: ViewContainerRef = inject(ViewContainerRef);
  runtimeService: RuntimeService = inject(RuntimeService);
  course = input.required<CourseModel>();
  isPopupVisible = signal(false);
  isPdfLoading = signal(true);
  pdfUrl = computed(() => `assets/resources/course/${this.course().certificateUrl}`);

  togglePopup() {
    this.isPopupVisible.update(v => !v);
    this.isPdfLoading.set(true);
  }

  onPdfLoad() {
    this.isPdfLoading.set(false);
    this.runtimeService.fixEmulatedEncapsulation(this.viewContainerRef);
  }

  onPageRendered() {
    this.runtimeService.fixEmulatedEncapsulation(this.viewContainerRef);
  }
}
