import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company/company.component';
import { AppsComponent } from './company/our-apps/apps/apps.component';


@NgModule({
  declarations: [CompanyComponent, AppsComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
