import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoFabricantesPageComponent } from './pages/listado-fabricantes-page/listado-fabricantes-page.component';
import { RegistroFabricantePageComponent } from './pages/registro-fabricante-page/registro-fabricante-page.component';

const routes: Routes = [
  {path:'listado', component: ListadoFabricantesPageComponent},
  {path:'registro', component: RegistroFabricantePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FabricantesRoutingModule { }
