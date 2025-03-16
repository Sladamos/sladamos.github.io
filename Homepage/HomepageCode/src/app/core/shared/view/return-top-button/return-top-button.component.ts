import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-return-top-button',
  imports: [],
  templateUrl: './return-top-button.component.html',
  styleUrl: './return-top-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.visible]': 'isWindowScrolled'
  }
})
export class ReturnTopButtonComponent implements OnInit, OnDestroy {
  isWindowScrolled = false;
  private scrollListener = () => this.isWindowScrolled = window.scrollY !== 0;

  ngOnInit() {
    window.addEventListener('scroll', this.scrollListener);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollListener);
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
