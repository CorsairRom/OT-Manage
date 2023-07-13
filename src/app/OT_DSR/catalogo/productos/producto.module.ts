import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoRoutingModule } from './producto-routing.module';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { ActualizarProductoPageComponent } from './pages/actualizar-producto-page/actualizar-producto-page.component';
import { DetalleProductoPageComponent } from './pages/detalle-producto-page/detalle-producto-page.component';
import { ListadoProductosPageComponent } from './pages/listado-productos-page/listado-productos-page.component';
import { RegistroProductoPageComponent } from './pages/registro-producto-page/registro-producto-page.component';

@NgModule({
	imports: [
		CommonModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    ConfirmPopupModule,
    MessagesModule,
    MultiSelectModule,
    ProductoRoutingModule
	],
  declarations: [
    ActualizarProductoPageComponent,
    DetalleProductoPageComponent,
    ListadoProductosPageComponent,
    RegistroProductoPageComponent
  ]
})
export class ProductoModule{


}
