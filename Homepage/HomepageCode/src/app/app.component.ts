import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AppLoaderService} from './core/loading/service/app-loader.service';
import {AppLoaderComponent} from './core/loading/view/app-loader/app-loader.component';
import {FooterComponent} from './core/shared/view/footer/footer.component';
import {HeaderComponent} from './core/shared/view/header/header.component';
import {ReturnTopButtonComponent} from './core/shared/view/return-top-button/return-top-button.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    ReturnTopButtonComponent,
    AppLoaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loaderService = inject(AppLoaderService);

  constructor() {
    this.loaderService.run();
  }
}
