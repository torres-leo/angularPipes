import { Component } from '@angular/core';
import { Hero } from '../../interfaces/main.interface';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css'],
})
export class CustomPipesComponent {
  active: boolean = true;
  heroes: Hero[] = [
    { name: 'Iron man', age: 53, color: 'Red' },
    { name: 'Captain America', age: 105, color: 'Blue' },
    { name: 'War Machine', age: 54, color: 'Gray' },
  ];

  orderBy: string = '';

  handleClick() {
    this.active = !this.active;
  }

  changeOrder(value: string) {
    this.orderBy = value;
  }
}
