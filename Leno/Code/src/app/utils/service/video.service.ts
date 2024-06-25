import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface VideoMessage {
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  videoMessageSubject = new Subject<VideoMessage>();

  constructor() { }

  enterToVideo(url: string) {
    const message: VideoMessage = { url: url}
    this.videoMessageSubject.next(message);
  }
}
