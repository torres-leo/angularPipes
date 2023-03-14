import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Texts & Dates',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: 'numbers',
          },
          {
            label: 'Not Commons',
            icon: 'pi pi-globe',
            routerLink: 'not-commons',
          },
        ],
      },
      {
        label: 'Custom Pipes',
        icon: 'pi pi-cog',
      },
    ];
  }
}
