import { Component } from '@angular/core';
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

  constructor(private windowSizeService: WindowSizeService)
  {

  }

  isMobile(): boolean {
    return this.windowSizeService.mobileQuery.matches;

  }
}
