import { Component, ElementRef, Renderer2, SecurityContext, ViewChild } from '@angular/core';
import { VideoMessage, VideoService } from '../../service/video.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SafePipe } from '../../pipe/safe.pipe';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [SafePipe],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @ViewChild('video') video!: ElementRef;
  videoUrl: string = "";

  constructor(private renderer: Renderer2) {

  }

  exitFromVideo() {
    const element = this.video.nativeElement;
    this.renderer.setStyle(element, 'display', 'none');
  }

  enterToVideo(message: VideoMessage) {
    this.videoUrl = message.url;
  }
}
