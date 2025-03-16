import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'navbar-mobile-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.css'
})
export class MobileMenuComponent{
  @ViewChild('menuItems') menuItems!: ElementRef;

  constructor(private renderer: Renderer2) {}


  onMenuClicked() {
    const element = this.menuItems.nativeElement;
    if (element.classList.contains('active')) {
      this.renderer.removeClass(element, 'active');
    } else {
      this.renderer.addClass(element, 'active');
    }
  }
}
