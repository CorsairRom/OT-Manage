import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FabricantesRoutingModule } from './fabricantes-routing.module';
import { ListadoFabricantesPageComponent } from './pages/listado-fabricantes-page/listado-fabricantes-page.component';
import { DetalleFabricantePageComponent } from './pages/detalle-fabricante-page/detalle-fabricante-page.component';
import { ActualizarFabricantePageComponent } from './pages/actualizar-fabricante-page/actualizar-fabricante-page.component';
import { RegistroFabricantePageComponent } from './pages/registro-fabricante-page/registro-fabricante-page.component';
import { ListadoFabricantesComponent } from './components/listado-fabricantes/listado-fabricantes.component';
import { FormularioFabricanteComponent } from './components/formulario-fabricante/formulario-fabricante.component';

import {InputTextModule} from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    ListadoFabricantesPageComponent,
    DetalleFabricantePageComponent,
    ActualizarFabricantePageComponent,
    RegistroFabricantePageComponent,
    ListadoFabricantesComponent,
    FormularioFabricanteComponent
  ],
  imports: [
    CommonModule,
    FabricantesRoutingModule,
    ButtonModule,
    TableModule,
    TagModule,
    InputTextModule,
    OverlayPanelModule,
    DialogModule,
    FormsModule
  ]
})
export class FabricantesModule { }
