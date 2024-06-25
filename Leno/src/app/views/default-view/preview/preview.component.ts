import { Component } from '@angular/core';
import { VideoService } from '../../../utils/service/video.service';

@Component({
  selector: 'preview',
  standalone: true,
  imports: [],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent {

  url: string = "https://www.youtube.com/embed/Lg21MW4_suQ?si=syuxCsB2O9n7lMip"

  constructor(private service: VideoService) {

  }

  sendRequestForPlayVideo() {
    this.service.enterToVideo(this.url);
  }

}
