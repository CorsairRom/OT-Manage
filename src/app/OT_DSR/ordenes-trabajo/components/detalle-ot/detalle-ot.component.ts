import { Component, Input, OnInit, inject } from '@angular/core';
import { OTResponse, ProcesosOT } from '../../interfaces/ot.interface';
import { SeguimientoService } from '../../services/seguimiento.service';

@Component({
  selector: 'detalle-ot',
  templateUrl: './detalle-ot.component.html',
  styles: [
  `
  .widthLabelGroup{
    width: 130px;
  }
  `
  ]
})
export class DetalleOTComponent implements OnInit{

  @Input() ot?: OTResponse;
  seguimientoService = inject(SeguimientoService)
  allActividades: any[] = [];
  procesoOT?:ProcesosOT[];



  ngOnInit(): void {
    this.seguimientoService.getProcesosOT().subscribe(res => {
      this.procesoOT = res
      this.procesoOT.forEach(actividades => {
        this.allActividades.push(actividades)
      })
  }
)}

  actividadEnProceso(procesoOT: any, actividad: number): boolean {
    return procesoOT.actividades.some((act: any) => act.proceso === procesoOT.proceso && act.id === actividad);
  }

}
