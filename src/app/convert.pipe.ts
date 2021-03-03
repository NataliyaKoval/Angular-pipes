import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string | number {
    if (!value) {
      return '';
    }
    return parseFloat(value) * 1.609344;
  }

}
