import { Inject, Injectable, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';

@Injectable()
export class WindowSizeService implements OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef,
     private media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 767px)');

    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
