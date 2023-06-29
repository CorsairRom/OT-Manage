import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracionRoutingModule } from './configuracion-routing.module';
import { ConfiguracionesPageComponent } from './pages/configuraciones-page/configuraciones-page.component';


@NgModule({
  declarations: [
    ConfiguracionesPageComponent
  ],
  imports: [
    CommonModule,
    ConfiguracionRoutingModule
  ]
})
export class ConfiguracionModule { }
