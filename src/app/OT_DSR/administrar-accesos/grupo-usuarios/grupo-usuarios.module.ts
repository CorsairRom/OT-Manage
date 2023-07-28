import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoUsuariosRoutingModule } from './grupo-usuarios-routing.module';
import { ListadoGrupoUsuarioPageComponent } from './pages/listado-grupo-usuario-page/listado-grupo-usuario-page.component';


@NgModule({
  declarations: [
    ListadoGrupoUsuarioPageComponent
  ],
  imports: [
    CommonModule,
    GrupoUsuariosRoutingModule
  ]
})
export class GrupoUsuariosModule { }
