import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalNumberFormatter',
  standalone: true
})
export class DecimalNumberFormatterPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (value == null) return '';
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}
