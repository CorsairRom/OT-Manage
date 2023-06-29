import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListadoUnidadesPageComponent } from './pages/listado-unidades-page/listado-unidades-page.component';
import { RegistroUnidadPageComponent } from './pages/registro-unidad-page/registro-unidad-page.component';



@NgModule({
	imports: [RouterModule.forChild([
    {path: 'listado', component: ListadoUnidadesPageComponent},
    {path: 'registro', component: RegistroUnidadPageComponent}
	])],
	exports: [RouterModule]
})
export class UnidadesRoutingModule { }
