import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {ThemeService} from '../../../shared/service/theme.service';
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
  themeService = inject(ThemeService);
  isWinter = computed(() => this.themeService.theme() === 'winter');
}
