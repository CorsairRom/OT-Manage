import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdenesTrabajoRoutingModule } from './ordenes-trabajo-routing.module';
import { TablaOTComponent } from './components/tabla-ot/tabla-ot.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoOrdenesTrabajoPageComponent } from './pages/listado-ordenes-trabajo-page/listado-ordenes-trabajo-page.component';
import { FormOTComponent } from './components/form-ot/form-ot.component';
import { RegistroOrdenesTrabajoPageComponent } from './pages/registro-ordenes-trabajo-page/registro-ordenes-trabajo-page.component';
import { ClientSelectorComponent } from '../core/components/client-selector/client-selector.component';
import { DetalleOrdenesTrabajoPageComponent } from './pages/detalle-ordenes-trabajo-page/detalle-ordenes-trabajo-page.component';
import { DetalleOTComponent } from './components/detalle-ot/detalle-ot.component';
import { SeguimientoOTComponent } from './components/seguimiento-ot/seguimiento-ot.component';
import { TecnicoOTComponent } from './components/tecnico-ot/tecnico-ot.component';




@NgModule({
  declarations: [
    TablaOTComponent,
    ClientSelectorComponent,
    ListadoOrdenesTrabajoPageComponent,
    RegistroOrdenesTrabajoPageComponent,
    DetalleOrdenesTrabajoPageComponent,
    FormOTComponent,
    DetalleOTComponent,
    SeguimientoOTComponent,
    TecnicoOTComponent
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
