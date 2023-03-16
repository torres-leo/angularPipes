import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CommonsComponent } from './main/pages/commons/commons.component';
import { NumbersComponent } from './main/pages/numbers/numbers.component';
import { NotCommonsComponent } from './main/pages/not-commons/not-commons.component';
import { CustomPipesComponent } from './main/pages/custom-pipes/custom-pipes.component';

const routes: Routes = [
  { path: '', component: CommonsComponent, pathMatch: 'full' },
  { path: 'numbers', component: NumbersComponent },
  { path: 'not-commons', component: NotCommonsComponent },
  { path: 'custom-pipes', component: CustomPipesComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
