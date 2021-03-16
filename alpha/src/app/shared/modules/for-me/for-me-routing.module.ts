import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ForMeComponent } from './for-me/for-me.component';

const routes: Routes = [
  {
    path: "",
    component: ForMeComponent
  },
  {
    path: ":id",
    component: DetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForMeRoutingModule { }
