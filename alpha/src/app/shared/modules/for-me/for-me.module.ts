import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForMeRoutingModule } from './for-me-routing.module';
import { ForMeComponent } from './for-me/for-me.component';


@NgModule({
  declarations: [ForMeComponent],
  imports: [
    CommonModule,
    ForMeRoutingModule
  ]
})
export class ForMeModule { }
