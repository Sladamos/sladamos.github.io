import {Component, computed} from '@angular/core';
import {ScreenTypeService} from '../../../../shared/service/screen-type.service';
import {MainSpinnerComponent} from '../main-spinner/main-spinner.component';
import {MainImageTextRowComponent} from '../main-image-text-row/main-image-text-row.component';

@Component({
  selector: 'app-main-page',
  imports: [
    MainSpinnerComponent,
    MainImageTextRowComponent
  ],
  standalone: true,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  host: {
    'class': 'container__normal'
  }
})
export class MainPageComponent {

  reverseImageTextRow = computed(() => !this.screenTypeService.isMobile())


  constructor(private screenTypeService: ScreenTypeService) {

  }

}
