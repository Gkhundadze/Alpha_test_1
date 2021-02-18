import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForBusinessComponent } from './for-business/for-business.component';

const routes: Routes = [
  {
    path: '',
    component: ForBusinessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForBusinessRoutingModule { }
