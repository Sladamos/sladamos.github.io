import { Component } from '@angular/core';
import {MainSpinnerComponent} from '../../components/main-spinner/main-spinner.component';

@Component({
  selector: 'app-main-page',
  imports: [
    MainSpinnerComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  host: {
    'class': 'container__normal'
  }
})
export class MainPageComponent {

}
