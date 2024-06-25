import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface VideoMessage {
  url: string
}

@Injectable()
export class VideoService {

  constructor() { }

  enterToVideo(url: string) : Observable<VideoMessage> {
    const message: VideoMessage = { url: url}
    console.log(message)
    return of(message)
  }
}
