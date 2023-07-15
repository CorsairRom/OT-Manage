import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioRoutingModule } from './servicio-routing.module';
import { ActualizarServicioPageComponent } from './pages/actualizar-servicio-page/actualizar-servicio-page.component';
import { DetalleServicioPageComponent } from './pages/detalle-servicio-page/detalle-servicio-page.component';
import { ListadoServiciosPageComponent } from './pages/listado-servicios-page/listado-servicios-page.component';
import { RegistroServicioPageComponent } from './pages/registro-servicio-page/registro-servicio-page.component';
import { TablaServiciosComponent } from './components/tabla-servicios/tabla-servicios.component';
import { FormularioServiciosComponent } from './components/formulario-servicios/formulario-servicios.component';
import { PrimeNGModule } from '../../prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
	imports: [
		CommonModule,
    ServicioRoutingModule,
    PrimeNGModule,
    FormsModule,
    ReactiveFormsModule,
	],
	declarations: [
   ActualizarServicioPageComponent,
   DetalleServicioPageComponent,
   ListadoServiciosPageComponent,
   RegistroServicioPageComponent,
   TablaServiciosComponent,
   FormularioServiciosComponent
	]
})
export class ServicioModule { }

