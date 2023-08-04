import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdenesTrabajoRoutingModule } from './ordenes-trabajo-routing.module';
import { TablaOTComponent } from './components/tabla-ot/tabla-ot.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TablaOTComponent
  ],
  imports: [
    CommonModule,
    OrdenesTrabajoRoutingModule,
    PrimeNGModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class OrdenesTrabajoModule { }
