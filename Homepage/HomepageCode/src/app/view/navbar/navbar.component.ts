import {Component, computed, signal} from '@angular/core';
import {ScreenTypeService} from '../../shared/service/screen-type.service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    NgClass
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
