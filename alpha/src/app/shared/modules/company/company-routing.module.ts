import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './company/about/about.component';
import { CompanyComponent } from './company/company.component';
import { ContactComponent } from './company/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
  },
  {
    path: 'about-us',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
