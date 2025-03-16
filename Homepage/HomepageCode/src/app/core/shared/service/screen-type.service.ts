import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenTypeService {
  isNotDesktop = signal(window.innerWidth <= 968);

  constructor() {
    this.initializeResizeListener();
  }

  private initializeResizeListener() {
    globalThis.window.addEventListener('resize', () => {
      this.isNotDesktop.set(globalThis.window.innerWidth <= 968);
    });
  }
}
