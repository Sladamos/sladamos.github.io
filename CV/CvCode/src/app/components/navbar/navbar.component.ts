import {Component, computed, HostListener, Signal, signal} from '@angular/core';
import {window} from "rxjs";

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isMenuOpen = signal(false);
  isMobile = signal(globalThis.window.innerWidth <= 968);

  toggleMenu() {
    this.isMenuOpen.update((state: boolean) => !state);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    this.isMobile.set(globalThis.window.innerWidth <= 968);
  }

}
