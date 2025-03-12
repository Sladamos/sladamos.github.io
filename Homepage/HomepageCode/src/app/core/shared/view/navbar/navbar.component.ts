import {ChangeDetectionStrategy, Component, computed, HostListener, inject, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';
import {ScreenTypeService} from '../../service/screen-type.service';

@Component({
  selector: 'app-navbar',
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  screenTypeService = inject(ScreenTypeService)
  isMobileMenuOpen = signal(false);
  isMobile = computed(() => this.screenTypeService.isNotDesktop());

  toggleMenu(event: MouseEvent) {
    this.isMobileMenuOpen.update((state: boolean) => !state && this.isMobile());
    event.stopPropagation();
  }

  @HostListener('window:click')
  closeMenu() {
    this.isMobileMenuOpen.set(false);
  }
}
