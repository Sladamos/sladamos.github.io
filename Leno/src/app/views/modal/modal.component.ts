import { Component, ElementRef, OnInit, Renderer2, SecurityContext, ViewChild } from '@angular/core';
import { VideoMessage, VideoService } from '../../utils/service/video.service';
import { SafePipe } from '../../utils/pipe/safe.pipe';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [SafePipe],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  providers: [VideoService]
})
export class ModalComponent implements OnInit {
  @ViewChild('video') video!: ElementRef;
  videoUrl: string = "";

  constructor(private renderer: Renderer2, private service: VideoService) {
  }
  ngOnInit(): void {
    this.service.videoMessage$.subscribe(this.enterToVideo);
  }

  exitFromVideo() {
    const element = this.video.nativeElement;
    this.renderer.setStyle(element, 'display', 'none');
  }

  enterToVideo(message: VideoMessage) {
    this.videoUrl = message.url;
  }
}
