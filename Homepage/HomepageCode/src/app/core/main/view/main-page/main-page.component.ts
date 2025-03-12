import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {MainSpinnerComponent} from '../main-spinner/main-spinner.component';
import {MainImageTextRowComponent} from '../main-image-text-row/main-image-text-row.component';
import {ScreenTypeService} from '../../../shared/service/screen-type.service';

@Component({
  selector: 'app-main-page',
  imports: [
    MainSpinnerComponent,
    MainImageTextRowComponent
  ],
  standalone: true,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'container__normal'
  }
})
export class MainPageComponent {
  screenTypeService = inject(ScreenTypeService)
  reverseImageTextRow = computed(() => !this.screenTypeService.isNotDesktop())
}
