import { Component } from '@angular/core';
import { AppMainComponent } from './views/app-main/app-main.component';
import { AppNavComponent } from './views/app-nav/app-nav.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AppFooterComponent } from './views/app-footer/app-footer.component';
import { AppModalComponent } from './views/app-modal/app-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AppNavComponent, AppMainComponent, AppFooterComponent, AppModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView();
        }
      }
    });
  }

  
}
