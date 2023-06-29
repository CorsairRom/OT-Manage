import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path: 'usuarios',
        loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
      },
      {
        path:'Grupo-usuarios',
        loadChildren: () => import('./grupo-usuarios/grupo-usuarios.module').then(m => m.GrupoUsuariosModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrarAccesosRoutingModule { }
