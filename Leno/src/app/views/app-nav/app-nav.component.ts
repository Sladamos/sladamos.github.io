import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { DesktopMenuComponent } from './desktop-menu/desktop-menu.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { WindowSizeService } from '../../utils/service/window-size.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, DesktopMenuComponent, MobileMenuComponent],
  templateUrl: './app-nav.component.html',
  styleUrl: './app-nav.component.css',
  providers: [WindowSizeService]
})
export class AppNavComponent {
  @ViewChild('navbar') navbar!: ElementRef;
  private scrollEventListener: (event: Event) => void;

  constructor(private windowSizeService: WindowSizeService, private renderer: Renderer2) {
    this.scrollEventListener = this.onWindowScroll.bind(this);
    window.addEventListener('scroll', this.scrollEventListener);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEventListener);
  }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollPosition = window.scrollY;
    const element = this.navbar.nativeElement;
    if (scrollPosition > 0) {
      this.renderer.addClass(element, 'navbar--scroll');
    } else {
      this.renderer.removeClass(element, 'navbar--scroll');
    }
  }

  isMobile(): boolean {
    return this.windowSizeService.mobileQuery.matches;
  }
}
