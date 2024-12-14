import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {SpinnerComponent} from '../../../../shared/components/spinner/spinner.component';

@Component({
  selector: 'app-main-spinner',
  imports: [
    SpinnerComponent
  ],
  templateUrl: './main-spinner.component.html',
  styleUrl: './main-spinner.component.css'
})
export class MainSpinnerComponent {

}
