import {Component, computed, signal} from '@angular/core';
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
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMobileMenuOpen = signal(false);
  isMobile = computed(() => this.screenTypeService.isMobile());

  constructor(private screenTypeService: ScreenTypeService) {}

  toggleMenu() {
    this.isMobileMenuOpen.update((state: boolean) => !state && this.isMobile());
  }
}
