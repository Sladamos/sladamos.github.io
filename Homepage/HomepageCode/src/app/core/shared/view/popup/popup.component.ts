import {ChangeDetectionStrategy, Component, HostListener, output} from '@angular/core';

@Component({
  selector: 'app-popup',
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupComponent {
  onPopupLeft = output<void>()

  @HostListener('click')
  onPopupLeftClicked() {
    this.onPopupLeft.emit();
  }
}
