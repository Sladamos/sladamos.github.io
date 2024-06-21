import { Component } from '@angular/core';
import { AppMainComponent } from './views/app-main/app-main.component';
import { AppNavComponent } from './views/app-nav/app-nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AppNavComponent, AppMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
