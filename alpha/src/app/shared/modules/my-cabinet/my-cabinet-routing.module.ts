import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCabinetComponent } from './my-cabinet/my-cabinet.component';

const routes: Routes = [
  {
    path: '',
    component: MyCabinetComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCabinetRoutingModule { }
