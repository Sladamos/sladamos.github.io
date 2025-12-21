import {Injectable, ViewContainerRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RuntimeService {
  fixEmulatedEncapsulation(viewContainerRef: ViewContainerRef) {
    return setTimeout(() =>this.emulateStyles(viewContainerRef));
  }

  private emulateStyles(viewContainerRef: ViewContainerRef) {
    if (!viewContainerRef.element?.nativeElement) {
      return;
    }

    const elementRef: HTMLElement = viewContainerRef.element.nativeElement;
    const ngHostAttribute = elementRef
      .getAttributeNames()
      .find((attr) => attr.startsWith('_nghost-'));

    if (!ngHostAttribute) {
      return;
    }

    const ngContentAttribute = ngHostAttribute.replace('_nghost-', '_ngcontent-');

    elementRef
      .querySelectorAll(`:not([${ngContentAttribute}])`)
      .forEach((elem) => {
        elem.setAttribute(ngContentAttribute, '')
      });
  }
}
