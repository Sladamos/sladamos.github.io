import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dolarPriceFormatter',
  standalone: true
})
export class DolarPriceFormatterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === 0) {
      return "Free"
    } else {
      return `$${value}`
    }
  }

}
