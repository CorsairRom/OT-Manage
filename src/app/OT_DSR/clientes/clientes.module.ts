import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ListadoClientesPageComponent } from './pages/listado-clientes-page/listado-clientes-page.component';
import { DetalleClientePageComponent } from './pages/detalle-cliente-page/detalle-cliente-page.component';
import { RegistroClientePageComponent } from './pages/registro-cliente-page/registro-cliente-page.component';
import { ActualizarClientePageComponent } from './pages/actualizar-cliente-page/actualizar-cliente-page.component';
import { FormularioClienteComponent } from './components/formulario-cliente/formulario-cliente.component';
import { TablaClientesComponent } from './components/tabla-clientes/tabla-clientes.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    ListadoClientesPageComponent,
    DetalleClientePageComponent,
    RegistroClientePageComponent,
    ActualizarClientePageComponent,
    FormularioClienteComponent,
    TablaClientesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    PrimeNGModule
  ]
})
export class ClientesModule { }
