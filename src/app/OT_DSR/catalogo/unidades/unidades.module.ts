import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimeNGModule } from '../../prime-ng/prime-ng.module';

import { UnidadesRoutingModule } from './unidades-routing.module';

import { ActualizarUnidadPageComponent } from './pages/actualizar-unidad-page/actualizar-unidad-page.component';
import { DetalleUnidadPageComponent } from './pages/detalle-unidad-page/detalle-unidad-page.component';
import { ListadoUnidadesPageComponent } from './pages/listado-unidades-page/listado-unidades-page.component';
import { RegistroUnidadPageComponent } from './pages/registro-unidad-page/registro-unidad-page.component';

import { TablaUnidadesComponent } from './components/tabla-unidades/tabla-unidades.component';
import { FormularioUnidadesComponent } from './components/formulario-unidades/formulario-unidades.component';

import { TiredMenuComponent } from 'src/app/shared/components/tired-menu/tired-menu.component';




@NgModule({
	imports: [
		CommonModule,
    UnidadesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule

	],
	declarations: [
    ActualizarUnidadPageComponent,
    DetalleUnidadPageComponent,
    ListadoUnidadesPageComponent,
    RegistroUnidadPageComponent,
    TablaUnidadesComponent,
    FormularioUnidadesComponent,
    TiredMenuComponent
  ]
})
export class UnidadesModule { }

