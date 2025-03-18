import {ChangeDetectionStrategy, Component, output} from '@angular/core';

@Component({
  selector: 'app-popup',
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(click)': 'onPopupLeftClicked()'
  }
})
export class PopupComponent {
  onPopupLeft = output<void>()

  onPopupLeftClicked() {
    this.onPopupLeft.emit();
  }
}
