import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface VideoMessage {
  url: string
}

@Injectable()
export class VideoService {
  private videoMessageSubject = new Subject<VideoMessage>();
  videoMessage$ = this.videoMessageSubject.asObservable();

  constructor() { }

  enterToVideo(url: string) {
    const message: VideoMessage = { url: url}
    this.videoMessageSubject.next(message);
  }
}
