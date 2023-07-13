import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListadoServiciosPageComponent } from './pages/listado-servicios-page/listado-servicios-page.component';
import { RegistroProductoPageComponent } from '../productos/pages/registro-producto-page/registro-producto-page.component';


@NgModule({
	imports: [RouterModule.forChild([
    {path: 'listado', component: ListadoServiciosPageComponent},
    {path: 'registro', component: RegistroProductoPageComponent}//reparar
	])],
	exports: [RouterModule]
})
export class ServicioRoutingModule { }
