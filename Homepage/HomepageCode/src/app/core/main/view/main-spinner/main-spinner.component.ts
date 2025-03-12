import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SpinnerComponent} from '../../../shared/view/spinner/spinner.component';

@Component({
  selector: 'app-main-spinner',
  imports: [
    SpinnerComponent
  ],
  templateUrl: './main-spinner.component.html',
  styleUrl: './main-spinner.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainSpinnerComponent {
}
