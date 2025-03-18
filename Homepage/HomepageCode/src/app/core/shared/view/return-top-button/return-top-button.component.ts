import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-return-top-button',
  imports: [],
  templateUrl: './return-top-button.component.html',
  styleUrl: './return-top-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.visible]': 'isWindowScrolled',
    '(window:scroll)': 'onScroll()'
  }
})
export class ReturnTopButtonComponent {
  isWindowScrolled = false;

  onScroll() {
    this.isWindowScrolled = window.scrollY !== 0;
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
