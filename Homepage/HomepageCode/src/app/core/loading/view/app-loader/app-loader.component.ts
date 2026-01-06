import {ChangeDetectionStrategy, Component, computed, effect, inject} from '@angular/core';
import {AppLoaderService} from '../../service/app-loader.service';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './app-loader.component.html',
  styleUrl: './app-loader.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppLoaderComponent {
  loaderService = inject(AppLoaderService);
}
