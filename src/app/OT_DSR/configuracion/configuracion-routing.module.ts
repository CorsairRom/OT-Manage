import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionesPageComponent } from './pages/configuraciones-page/configuraciones-page.component';

const routes: Routes = [
  {path: 'profile', component: ConfiguracionesPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracionRoutingModule { }
