import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCabinetRoutingModule } from './my-cabinet-routing.module';
import { MyCabinetComponent } from './my-cabinet/my-cabinet.component';


@NgModule({
  declarations: [MyCabinetComponent],
  imports: [
    CommonModule,
    MyCabinetRoutingModule
  ]
})
export class MyCabinetModule { }
