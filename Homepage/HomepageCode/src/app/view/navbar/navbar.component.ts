import {Component, computed, signal} from '@angular/core';
import {ScreenTypeService} from '../../shared/service/screen-type.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = signal(false);
  isMobile = computed(() => this.screenTypeService.isMobile());

  constructor(private screenTypeService: ScreenTypeService) {}

  toggleMenu() {
    this.isMenuOpen.update((state: boolean) => !state);
  }
}
