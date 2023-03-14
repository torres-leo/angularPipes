import { Component } from '@angular/core';

@Component({
  selector: 'app-commons',
  templateUrl: './commons.component.html',
  styleUrls: ['./commons.component.css'],
})
export class CommonsComponent {
  name = 'leo torres';

  date: Date = new Date();
}
