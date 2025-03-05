import {ChangeDetectionStrategy, Component, computed, inject, signal} from '@angular/core';
import {ScreenTypeService} from '../../../features/shared/service/screen-type.service';
import {NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';

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

  toggleMenu() {
    this.isMobileMenuOpen.update((state: boolean) => !state && this.isMobile());
  }

  closeMenu() {
    this.isMobileMenuOpen.set(false);
  }
}
