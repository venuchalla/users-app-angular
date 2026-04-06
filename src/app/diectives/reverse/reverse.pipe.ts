import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {

  transform(value: String): String {
    return value.split('').reverse().join('') ;
  }

}
