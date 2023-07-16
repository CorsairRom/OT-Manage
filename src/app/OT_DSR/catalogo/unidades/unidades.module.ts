import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnidadesRoutingModule } from './unidades-routing.module';
import { ActualizarUnidadPageComponent } from './pages/actualizar-unidad-page/actualizar-unidad-page.component';
import { DetalleUnidadPageComponent } from './pages/detalle-unidad-page/detalle-unidad-page.component';
import { ListadoUnidadesPageComponent } from './pages/listado-unidades-page/listado-unidades-page.component';
import { RegistroUnidadPageComponent } from './pages/registro-unidad-page/registro-unidad-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
	imports: [
		CommonModule,
    UnidadesRoutingModule,
    FormsModule,
    ReactiveFormsModule,

	],
	declarations: [
    ActualizarUnidadPageComponent,
    DetalleUnidadPageComponent,
    ListadoUnidadesPageComponent,
    RegistroUnidadPageComponent
  ]
})
export class UnidadesModule { }

