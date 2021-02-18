import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForBusinessRoutingModule } from './for-business-routing.module';
import { ForBusinessComponent } from './for-business/for-business.component';


@NgModule({
  declarations: [ForBusinessComponent],
  imports: [
    CommonModule,
    ForBusinessRoutingModule
  ]
})
export class ForBusinessModule { }
