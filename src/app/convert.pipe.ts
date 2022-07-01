import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: any, args: string) {
    if (!value) {
      return '';
    }
    if (args === 'km') {
      return value * 1.609;
    } else if (args === 'm') {
      return value * 1.609 * 1000;
    } else if (args === 'cm') {
      return value * 1.609 * 1000 * 1000;
    } else {
      throw new Error('Unit not supported');
    }
  }
}
