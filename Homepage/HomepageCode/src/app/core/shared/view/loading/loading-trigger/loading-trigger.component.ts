import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, output} from '@angular/core';

@Component({
  selector: 'app-loading-trigger',
  imports: [],
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingTriggerComponent implements AfterViewInit {

  visible = output();
  host = inject(ElementRef<HTMLElement>)
  private observer?: IntersectionObserver;

  ngAfterViewInit() {
    if (!this.host.nativeElement) return;

    this.observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          this.visible.emit();
        }
      },
      {rootMargin: '200px'}
    );

    this.observer.observe(this.host.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

}
