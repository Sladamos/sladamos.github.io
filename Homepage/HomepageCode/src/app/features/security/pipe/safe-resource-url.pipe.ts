import {inject, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Pipe({
  name: 'safeResourceUrl'
})
export class SafeResourceUrlPipe implements PipeTransform {
  sanitizer: DomSanitizer = inject(DomSanitizer);

  transform(value: string): SafeResourceUrl {
    console.log(value)
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
