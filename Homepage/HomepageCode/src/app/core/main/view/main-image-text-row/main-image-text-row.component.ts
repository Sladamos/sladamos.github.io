import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';

@Component({
  selector: 'app-main-image-text-row',
  imports: [],
  templateUrl: './main-image-text-row.component.html',
  styleUrl: './main-image-text-row.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainImageTextRowComponent {
  imageSrc: InputSignal<string> = input.required<string>();
  imageAlt: InputSignal<string> = input.required<string>();
  title: InputSignal<string> = input<string>("");
  reverse: InputSignal<boolean> = input(false);
}
