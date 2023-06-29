import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoReporteOtPageComponent } from './pages/listado-reporte-ot-page/listado-reporte-ot-page.component';
import { RegistroReporteOtPageComponent } from './pages/registro-reporte-ot-page/registro-reporte-ot-page.component';

const routes: Routes = [
  {path:'listado', component:ListadoReporteOtPageComponent},
  {path:'registro', component:RegistroReporteOtPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteOTRoutingModule { }
