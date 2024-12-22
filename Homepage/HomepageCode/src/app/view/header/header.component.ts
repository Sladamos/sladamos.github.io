import {Component, HostListener, OnDestroy, signal} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  imports: [
    NavbarComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  host: {
    '[class.header__scrolled]': 'isScrolled()'
  }
})
export class HeaderComponent implements OnDestroy {
  isScrolled = signal(false);

  constructor() {
    window.addEventListener('scroll', this.onWindowScroll);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onWindowScroll);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      this.isScrolled.update(() => true);
    } else {
      this.isScrolled.update(() => false);
    }
  }
}
