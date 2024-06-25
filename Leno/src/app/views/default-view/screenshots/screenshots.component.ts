import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'screenshots',
  standalone: true,
  imports: [NgFor],
  templateUrl: './screenshots.component.html',
  styleUrl: './screenshots.component.css'
})
export class ScreenshotsComponent {
  imagesArray: number[] = [];

  constructor() {
    this.imagesArray = Array(5).fill(0).map((x, i) => i+1);
  }

}
