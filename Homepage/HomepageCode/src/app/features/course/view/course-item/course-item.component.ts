import {ChangeDetectionStrategy, Component, computed, inject, input, ViewContainerRef} from '@angular/core';
import {CourseModel} from '../../model/course-model';
import {TechnologyChipComponent} from '../../../technology/view/technology-chip/technology-chip.component';
import {IssuerVerticalChipComponent} from '../../../issuer/view/issuer-vertical-chip/issuer-vertical-chip.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {PopupComponent} from '../../../../core/shared/view/popup/popup.component';
import {LoadingSpinnerComponent} from '../../../../core/shared/view/loading-spinner/loading-spinner.component';
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
  isPopupVisible: any = false;
  isPdfLoading: any = true;
  pdfUrl = computed(() => `assets/resources/course/${this.course().certificateUrl}`);

  switchPdfVisibility() {
    this.isPdfLoading = true;
    this.isPopupVisible = !this.isPopupVisible;
  }

  onPdfLoad() {
    this.isPdfLoading = false;
    setTimeout(() => this.runtimeService.fixEmulatedEncapsulation(this.viewContainerRef))
  }

  onPageRendered() {
    setTimeout(() => this.runtimeService.fixEmulatedEncapsulation(this.viewContainerRef))
  }

  openPdfInNewTab() {
    window.open(this.pdfUrl(), '_blank');
  }
}
