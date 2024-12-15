import {Component, input, InputSignal} from '@angular/core';

@Component({
  selector: 'app-image-text-row',
  imports: [],
  templateUrl: './image-text-row.component.html',
  styleUrl: './image-text-row.component.css'
})
export class ImageTextRowComponent {
  imageSrc: InputSignal<string> = input.required<string>();
  imageAlt: InputSignal<string> = input.required<string>();
  title: InputSignal<string> = input<string>("");
  reverse: InputSignal<boolean> = input(false);
}
