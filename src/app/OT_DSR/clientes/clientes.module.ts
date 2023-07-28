import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { PrimeNGModule } from '../prime-ng/prime-ng.module';

import { UbicacionFormComponent } from 'src/app/shared/components/ubicacion-form/ubicacion-form.component';

import { ClientesRoutingModule } from './clientes-routing.module';

import { ActualizarClientePageComponent } from './pages/actualizar-cliente-page/actualizar-cliente-page.component';
import { DetalleClientePageComponent } from './pages/detalle-cliente-page/detalle-cliente-page.component';
import { ListadoClientesPageComponent } from './pages/listado-clientes-page/listado-clientes-page.component';
import { RegistroClientePageComponent } from './pages/registro-cliente-page/registro-cliente-page.component';

import { DetalleClienteComponent } from './components/detalle-cliente/detalle-cliente.component';
import { FormularioClienteComponent } from './components/formulario-cliente/formulario-cliente.component';
import { FormularioSucursalComponent } from './components/formulario-sucursal/formulario-sucursal.component';
import { TablaClientesComponent } from './components/tabla-clientes/tabla-clientes.component';
import { TablaSucursalesComponent } from './components/tabla-sucursales/tabla-sucursales.component';



@NgModule({
  declarations: [
    ActualizarClientePageComponent,
    DetalleClienteComponent,
    DetalleClientePageComponent,
    FormularioClienteComponent,
    FormularioSucursalComponent,
    ListadoClientesPageComponent,
    RegistroClientePageComponent,
    TablaClientesComponent,
    TablaSucursalesComponent,
    UbicacionFormComponent,

  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    PrimeNGModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ClientesModule { }
