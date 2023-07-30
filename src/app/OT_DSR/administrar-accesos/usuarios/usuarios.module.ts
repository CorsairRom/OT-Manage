import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimeNGModule } from '../../prime-ng/prime-ng.module';

import { UsuariosRoutingModule } from './usuarios-routing.module';

import { ListadoUsuariosPageComponent } from './pages/listado-usuarios-page/listado-usuarios-page.component';

import { TablaUsuariosComponent } from './components/tabla-usuarios/tabla-usuarios.component';
import { RegistroUsuarioPageComponent } from './pages/registro-usuario-page/registro-usuario-page.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';


@NgModule({
  declarations: [
    TablaUsuariosComponent,
    ListadoUsuariosPageComponent,
    RegistroUsuarioPageComponent,
    FormularioUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    PrimeNGModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UsuariosModule { }
