import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForMeComponent } from './for-me/for-me.component';

const routes: Routes = [
  {
    path: "",
    component: ForMeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForMeRoutingModule { }
