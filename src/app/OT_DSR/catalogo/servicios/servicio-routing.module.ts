import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListadoServiciosPageComponent } from './pages/listado-servicios-page/listado-servicios-page.component';



@NgModule({
	imports: [RouterModule.forChild([
    {path: 'listado', component: ListadoServiciosPageComponent}

	])],
	exports: [RouterModule]
})
export class ServicioRoutingModule { }
