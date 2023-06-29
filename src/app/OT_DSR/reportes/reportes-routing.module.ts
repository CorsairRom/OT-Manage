import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";


@NgModule({
  imports:[RouterModule.forChild([
    {path: '',
    children:[
      {path: 'reporte-ot', loadChildren: ()=> import('./reporte-ot/reporte-ot.module').then(m => m.ReporteOTModule)},

    ]

    }

  ])],
  exports:[RouterModule]
})

export class ReportesRoutingModule{}
