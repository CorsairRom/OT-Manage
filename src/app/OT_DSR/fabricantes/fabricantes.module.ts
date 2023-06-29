import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricantesRoutingModule } from './fabricantes-routing.module';
import { ListadoFabricantesPageComponent } from './pages/listado-fabricantes-page/listado-fabricantes-page.component';
import { DetalleFabricantePageComponent } from './pages/detalle-fabricante-page/detalle-fabricante-page.component';
import { ActualizarFabricantePageComponent } from './pages/actualizar-fabricante-page/actualizar-fabricante-page.component';
import { RegistroFabricantePageComponent } from './pages/registro-fabricante-page/registro-fabricante-page.component';


@NgModule({
  declarations: [
    ListadoFabricantesPageComponent,
    DetalleFabricantePageComponent,
    ActualizarFabricantePageComponent,
    RegistroFabricantePageComponent
  ],
  imports: [
    CommonModule,
    FabricantesRoutingModule
  ]
})
export class FabricantesModule { }
