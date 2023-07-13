import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductoRoutingModule } from './producto-routing.module';

import { ActualizarProductoPageComponent } from './pages/actualizar-producto-page/actualizar-producto-page.component';
import { DetalleProductoPageComponent } from './pages/detalle-producto-page/detalle-producto-page.component';
import { ListadoProductosPageComponent } from './pages/listado-productos-page/listado-productos-page.component';
import { RegistroProductoPageComponent } from './pages/registro-producto-page/registro-producto-page.component';
import { TablaProductosComponent } from './components/tabla-productos/tabla-productos.component';
import { PrimeNGModule } from '../../prime-ng/prime-ng.module';

@NgModule({
	imports: [
		CommonModule,
    FormsModule,
    ProductoRoutingModule,
    PrimeNGModule,
    ReactiveFormsModule
	],
  declarations: [
    ActualizarProductoPageComponent,
    DetalleProductoPageComponent,
    ListadoProductosPageComponent,
    RegistroProductoPageComponent,
    TablaProductosComponent
  ]
})
export class ProductoModule{


}
