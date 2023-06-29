import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteOTRoutingModule } from './reporte-ot-routing.module';
import { ListadoReporteOtPageComponent } from './pages/listado-reporte-ot-page/listado-reporte-ot-page.component';
import { RegistroReporteOtPageComponent } from './pages/registro-reporte-ot-page/registro-reporte-ot-page.component';
import { DatalleReporteOtPageComponent } from './pages/datalle-reporte-ot-page/datalle-reporte-ot-page.component';
import { ActualizarReporteOtPageComponent } from './pages/actualizar-reporte-ot-page/actualizar-reporte-ot-page.component';


@NgModule({
  declarations: [
    ListadoReporteOtPageComponent,
    RegistroReporteOtPageComponent,
    DatalleReporteOtPageComponent,
    ActualizarReporteOtPageComponent
  ],
  imports: [
    CommonModule,
    ReporteOTRoutingModule
  ]
})
export class ReporteOTModule { }
