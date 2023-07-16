import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioRoutingModule } from './servicio-routing.module';

import { ListadoServiciosPageComponent } from './pages/listado-servicios-page/listado-servicios-page.component';

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
    ListadoServiciosPageComponent,
    TablaServiciosComponent,
    FormularioServiciosComponent,
  ],
})
export class ServicioModule {}
