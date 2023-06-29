import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListadoProductosPageComponent } from './pages/listado-productos-page/listado-productos-page.component';
import { RegistroProductoPageComponent } from './pages/registro-producto-page/registro-producto-page.component';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: 'listado', component:ListadoProductosPageComponent },
		{ path: 'registro', component:RegistroProductoPageComponent },
	])],
	exports: [RouterModule]
})
export class ProductoRoutingModule { }
