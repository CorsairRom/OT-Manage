import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimeNGModule } from '../../prime-ng/prime-ng.module';

import { UsuariosRoutingModule } from './usuarios-routing.module';

import { ListadoUsuariosPageComponent } from './pages/listado-usuarios-page/listado-usuarios-page.component';

import { TablaUsuariosComponent } from './components/tabla-usuarios/tabla-usuarios.component';


@NgModule({
  declarations: [
    TablaUsuariosComponent,
    ListadoUsuariosPageComponent
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
