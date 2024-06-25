import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { VideoService } from '../../service/video.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @ViewChild('video') video!: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  exitFromVideo() {
    const element = this.video.nativeElement;
    this.renderer.setStyle(element, 'display', 'none');
  }
}
