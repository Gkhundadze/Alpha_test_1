import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForMeRoutingModule } from './for-me-routing.module';
import { ForMeComponent } from './for-me/for-me.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [ForMeComponent, DetailsComponent],
  imports: [
    CommonModule,
    ForMeRoutingModule,
    DragScrollModule
  ]
})
export class ForMeModule { }
