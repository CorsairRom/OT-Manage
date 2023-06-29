import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoUsuariosPageComponent } from '../grupo-usuarios/pages/listado-usuarios-page/listado-usuarios-page.component';
import { RegistroUsuarioPageComponent } from '../grupo-usuarios/pages/registro-usuario-page/registro-usuario-page.component';

const routes: Routes = [
  {path:'listado', component:ListadoUsuariosPageComponent},
  {path:'registro', component:RegistroUsuarioPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
