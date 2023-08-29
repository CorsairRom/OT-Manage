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
import { InformeOTComponent } from './components/informe-ot/informe-ot.component';
import { FormularioClienteModule } from '../clientes/components/formulario-cliente/formulario-cliente.module';
import { SaveDocumentComponent } from './components/save-document/save-document.component';





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
    TecnicoOTComponent,
    InformeOTComponent,
    SaveDocumentComponent
  ],
  imports: [
    CommonModule,
    OrdenesTrabajoRoutingModule,
    PrimeNGModule,
    ReactiveFormsModule,
    FormsModule,
    FormularioClienteModule
  ]
})
export class OrdenesTrabajoModule { }
