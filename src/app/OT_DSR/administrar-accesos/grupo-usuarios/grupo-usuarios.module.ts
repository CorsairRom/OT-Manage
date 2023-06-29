import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoUsuariosRoutingModule } from './grupo-usuarios-routing.module';
import { ListadoUsuariosPageComponent } from './pages/listado-usuarios-page/listado-usuarios-page.component';
import { DetalleUsuarioPageComponent } from './pages/detalle-usuario-page/detalle-usuario-page.component';

import { RegistroUsuarioPageComponent } from './pages/registro-usuario-page/registro-usuario-page.component';
import { ActualizarUsuarioPageComponent } from './pages/actualizar-usuario-page/actualizar-usuario-page.component';


@NgModule({
  declarations: [
    ListadoUsuariosPageComponent,
    DetalleUsuarioPageComponent,
    RegistroUsuarioPageComponent,
    ActualizarUsuarioPageComponent
  ],
  imports: [
    CommonModule,
    GrupoUsuariosRoutingModule
  ]
})
export class GrupoUsuariosModule { }
