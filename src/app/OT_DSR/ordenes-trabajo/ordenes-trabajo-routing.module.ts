import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoOrdenesTrabajoPageComponent } from './pages/listado-ordenes-trabajo-page/listado-ordenes-trabajo-page.component';
import { RegistroOrdenesTrabajoPageComponent } from './pages/registro-ordenes-trabajo-page/registro-ordenes-trabajo-page.component';

const routes: Routes = [
  {path: 'listado', component: ListadoOrdenesTrabajoPageComponent},
  {path: 'registro', component: RegistroOrdenesTrabajoPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdenesTrabajoRoutingModule { }
