import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenTypeService {
  isMobile = signal(window.innerWidth <= 968);

  constructor() {
    this.initializeResizeListener();
  }

  private initializeResizeListener() {
    globalThis.window.addEventListener('resize', () => {
      this.isMobile.set(globalThis.window.innerWidth <= 968);
    });
  }
}
