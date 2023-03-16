import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { CommonsComponent } from './pages/commons/commons.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CustomPipesComponent } from './pages/custom-pipes/custom-pipes.component';
import { MyUppercasePipe } from './pipes/uppercase.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    CommonsComponent,
    CustomPipesComponent,
    MyUppercasePipe,
    SortPipe,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [NumbersComponent, NotCommonsComponent, CommonsComponent],
})
export class MainModule {}
