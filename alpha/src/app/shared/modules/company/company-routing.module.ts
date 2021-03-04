import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { AppsComponent } from './company/our-apps/apps/apps.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
  },
  {
    path: 'apps',
    component: AppsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
