import {Component, computed} from '@angular/core';
import {MainSpinnerComponent} from '../../components/main-spinner/main-spinner.component';
import {ImageTextRowComponent} from '../../components/image-text-row/image-text-row.component';
import {ScreenTypeService} from '../../../../shared/services/screen-type.service';

@Component({
  selector: 'app-main-page',
  imports: [
    MainSpinnerComponent,
    ImageTextRowComponent
  ],
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
