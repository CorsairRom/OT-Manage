import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListadoGrupoUsuariosPageComponent } from '../usuarios/pages/listado-grupo-usuarios-page/listado-grupo-usuarios-page.component';
import { RegistroGrupoUsuariosPageComponent } from '../usuarios/pages/registro-grupo-usuarios-page/registro-grupo-usuarios-page.component';

const routes: Routes = [
  {path:'listado', component:ListadoGrupoUsuariosPageComponent},
  {path:'registro', component:RegistroGrupoUsuariosPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoUsuariosRoutingModule { }
