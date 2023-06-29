import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoFacturasPageComponent } from './pages/listado-facturas-page/listado-facturas-page.component';
import { RegistroFacturasPageComponent } from './pages/registro-facturas-page/registro-facturas-page.component';

const routes: Routes = [
  {path:'listado', component: ListadoFacturasPageComponent},
  {path:'registro', component: RegistroFacturasPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturasRoutingModule { }
