import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoClientesPageComponent } from './pages/listado-clientes-page/listado-clientes-page.component';
import { RegistroClientePageComponent } from './pages/registro-cliente-page/registro-cliente-page.component';

const routes: Routes = [
  {path:'listado', component:ListadoClientesPageComponent},
  {path:'registro', component:RegistroClientePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
