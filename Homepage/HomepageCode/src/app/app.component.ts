import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './core/shared/view/footer/footer.component';
import {HeaderComponent} from './core/shared/view/header/header.component';
import {ReturnTopButtonComponent} from './core/shared/view/return-top-button/return-top-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, ReturnTopButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
