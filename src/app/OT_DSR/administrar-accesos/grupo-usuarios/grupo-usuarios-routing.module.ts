import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoGrupoUsuarioPageComponent } from './pages/listado-grupo-usuario-page/listado-grupo-usuario-page.component';




const routes: Routes = [
  {path:'listado', component:ListadoGrupoUsuarioPageComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoUsuariosRoutingModule { }
