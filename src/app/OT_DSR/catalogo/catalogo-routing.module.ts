import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";


@NgModule({
  imports:[RouterModule.forChild([
    {path: '',
    children:[
      {path: 'productos', loadChildren: ()=> import('./productos/producto.module').then(m => m.ProductoModule)},
      {path: 'servicios', loadChildren: ()=> import('./servicios/servicio.module').then(m => m.ServicioModule)},
      {path: 'unidades', loadChildren: ()=> import('./unidades/unidades.module').then(m => m.UnidadesModule)},
    ]

    }

  ])],
  exports:[RouterModule]
})

export class CatalogoRoutingModule{}
