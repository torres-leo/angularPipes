import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { CommonsComponent } from './pages/commons/commons.component';
import { SortComponent } from './pages/sort/sort.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    CommonsComponent,
    SortComponent,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    NumbersComponent,
    NotCommonsComponent,
    CommonsComponent,
    SortComponent,
  ],
})
export class MainModule {}
