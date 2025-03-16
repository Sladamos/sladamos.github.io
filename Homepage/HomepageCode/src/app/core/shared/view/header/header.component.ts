import {ChangeDetectionStrategy, Component, HostListener, OnDestroy, signal, WritableSignal} from '@angular/core';
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
    '[class.header__scrolled]': 'isScrolled()'
  }
})
export class HeaderComponent implements OnDestroy {
  private readonly scrollEventListener: (event: Event) => void;
  isScrolled: WritableSignal<boolean> = signal(false);

  constructor() {
    this.scrollEventListener = this.onWindowScroll.bind(this);
    window.addEventListener('scroll', this.scrollEventListener);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEventListener);
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
