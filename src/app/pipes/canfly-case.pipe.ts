import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFlyCase',
})

export class CanFlyCasePipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Puede volar' : 'No puede volar';
  }
}
