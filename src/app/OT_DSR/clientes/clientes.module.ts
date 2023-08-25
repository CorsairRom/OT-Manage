import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { PrimeNGModule } from '../prime-ng/prime-ng.module';



import { ClientesRoutingModule } from './clientes-routing.module';

import { ActualizarClientePageComponent } from './pages/actualizar-cliente-page/actualizar-cliente-page.component';
import { DetalleClientePageComponent } from './pages/detalle-cliente-page/detalle-cliente-page.component';
import { ListadoClientesPageComponent } from './pages/listado-clientes-page/listado-clientes-page.component';
import { RegistroClientePageComponent } from './pages/registro-cliente-page/registro-cliente-page.component';

import { DetalleClienteComponent } from './components/detalle-cliente/detalle-cliente.component';

import { FormularioSucursalComponent } from './components/formulario-sucursal/formulario-sucursal.component';
import { TablaClientesComponent } from './components/tabla-clientes/tabla-clientes.component';
import { TablaSucursalesComponent } from './components/tabla-sucursales/tabla-sucursales.component';
import { FormularioClienteModule } from './components/formulario-cliente/formulario-cliente.module';
import { UbicacionFormModule } from 'src/app/shared/components/ubicacion-form/ubicacion-form.module';



@NgModule({
  declarations: [
    ActualizarClientePageComponent,
    DetalleClienteComponent,
    DetalleClientePageComponent,
    FormularioSucursalComponent,
    ListadoClientesPageComponent,
    RegistroClientePageComponent,
    TablaClientesComponent,
    TablaSucursalesComponent,


  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    PrimeNGModule,
    ReactiveFormsModule,
    FormsModule,
    FormularioClienteModule,
    UbicacionFormModule
  ]
})
export class ClientesModule { }
