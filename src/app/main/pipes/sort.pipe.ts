import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/main.interface';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(heroes: Hero[], orderBy: string = ''): Hero[] {
    switch (orderBy) {
      case 'name':
        return (heroes = heroes.sort((a, b) => (a.name > b.name ? 1 : -1)));
      case 'color':
        return (heroes = heroes.sort((a, b) => (a.color > b.color ? 1 : -1)));
      case 'age':
        return (heroes = heroes.sort((a, b) => (a.age > b.age ? 1 : -1)));

      default:
        return heroes;
    }
  }
}
