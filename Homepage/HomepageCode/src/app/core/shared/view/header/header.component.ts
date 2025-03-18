import {ChangeDetectionStrategy, Component, signal, WritableSignal} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  imports: [
    NavbarComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.header__scrolled]': 'isScrolled()',
    '(window:scroll)': 'onWindowScroll()'
  }
})
export class HeaderComponent {
  isScrolled: WritableSignal<boolean> = signal(false);

  onWindowScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      this.isScrolled.update(() => true);
    } else {
      this.isScrolled.update(() => false);
    }
  }
}
