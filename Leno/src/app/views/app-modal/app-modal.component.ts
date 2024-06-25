import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VideoMessage, VideoService } from '../../utils/service/video.service';
import { SafePipe } from '../../utils/pipe/safe.pipe';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [SafePipe, CommonModule],
  templateUrl: './app-modal.component.html',
  styleUrl: './app-modal.component.css'
})
export class AppModalComponent implements OnInit {
  @ViewChild('video') video!: ElementRef;
  videoUrl: string = "";
  videoVisible: boolean = false;

  constructor(private service: VideoService) {
  }

  ngOnInit(): void {
    this.service.videoMessageSubject.subscribe(this.enterToVideo);
  }

  exitFromVideo() {
    this.videoVisible = false;
  }

  enterToVideo = (message: VideoMessage) => {
    this.videoUrl = message.url;
    this.videoVisible = true;
  }
}
