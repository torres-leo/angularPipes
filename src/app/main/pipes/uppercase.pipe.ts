import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUppercase',
})
export class MyUppercasePipe implements PipeTransform {
  transform(value: string, uppercase: boolean = true): string {
    return uppercase ? value.toUpperCase() : value.toLocaleLowerCase();
  }
}
