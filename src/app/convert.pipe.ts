import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: string, targetUnits: string): string | number {
    if (!value) {
      return '';
    }
    switch (targetUnits) {
      case 'km':
        return parseFloat(value) * 1.609344;
        break;
      case  'm':
        return parseFloat(value) * 1.609344 * 1000;
        break;
      case 'sm':
        return parseFloat(value) * 1.609344 * 1000 * 1000;
      default:
        throw new Error('Target unit not supported');
    }
  }

}
