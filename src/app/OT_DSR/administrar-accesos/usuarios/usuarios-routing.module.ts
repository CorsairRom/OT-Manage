import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoUsuariosPageComponent } from './pages/listado-usuarios-page/listado-usuarios-page.component';


const routes: Routes = [
  {path:'listado', component:ListadoUsuariosPageComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
