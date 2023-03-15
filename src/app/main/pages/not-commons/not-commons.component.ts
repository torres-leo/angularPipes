import { Component } from '@angular/core';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styleUrls: ['./not-commons.component.css'],
})
export class NotCommonsComponent {
  name: string = 'Leo';
  sex: string = 'M';
  active: boolean = true;

  options = {
    M: 'invitarlo',
    F: 'invitarla',
  };

  customers: string[] = ['Leo', 'Bayo', 'Axcel', 'Pol'];
  customersMap = {
    '=0': "We don't have any client waiting",
    '=1': 'We have a client waiting',
    other: 'We have # clients waiting',
  };

  changeName() {
    this.active = !this.active;

    if (this.active) {
      this.name = 'Leo';
      this.sex = 'M';
    } else {
      this.name = 'Bayola';
      this.sex = 'F';
    }
  }

  deleteCustomer() {
    this.customers.pop();
  }

  // Keyvalue pipe
  person = {
    name: 'leo',
    age: 25,
    country: 'Nic',
  };

  heroes = [
    { name: 'Iron man ', color: 'red' },
    { name: 'Captain America ', color: 'Blue' },
    { name: 'Wolverine', color: 'yellow' },
  ];
}
