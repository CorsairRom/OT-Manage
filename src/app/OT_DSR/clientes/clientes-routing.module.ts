import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoClientesPageComponent } from './pages/listado-clientes-page/listado-clientes-page.component';
import { RegistroClientePageComponent } from './pages/registro-cliente-page/registro-cliente-page.component';
import { DetalleClientePageComponent } from './pages/detalle-cliente-page/detalle-cliente-page.component';
import { ActualizarClientePageComponent } from './pages/actualizar-cliente-page/actualizar-cliente-page.component';

const routes: Routes = [
  {path:'listado', component:ListadoClientesPageComponent},
  {path:'registro', component:RegistroClientePageComponent},
  {path:':id/detalle', component: DetalleClientePageComponent},
  {path: ':id/actualizar', component: ActualizarClientePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
