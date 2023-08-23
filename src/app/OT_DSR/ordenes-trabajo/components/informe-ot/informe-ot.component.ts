import { Component, OnInit, inject } from '@angular/core';
import { informeOT } from '../../interfaces/informe-ot.interface';
import { SeguimientoService } from '../../services/seguimiento.service';
import { ProcesoOTSelect } from '../../interfaces/procesos-ot.interface';
import { map } from 'rxjs';


interface Column {
  field: string;
  header: string;
}
interface Row{
  datetime: string;
  state: string;
  observation: string;
}

@Component({
  selector: 'informe-ot',
  templateUrl: './informe-ot.component.html',
  styleUrls: ['./informe-ot.component.scss']
})
export class InformeOTComponent implements OnInit {

  cols!: Column[];
  informeOT!: Row[];

  visible: boolean = false;
  position: string = 'center';

  valueEstadoInforme?: ProcesoOTSelect;
  valueObsInforme?: string;
  valueSelectProceso: ProcesoOTSelect[] = []

  private seguimientoService = inject(SeguimientoService)

  ngOnInit(): void {
    this.informeOT = []
    this.seguimientoService.getProcesosOT().pipe(
      map(process => process.map(proc => {
        return {
          id: proc.id,
          nombre: proc.nombre
        }
      }))
    ).subscribe(proc => this.valueSelectProceso = proc);
    console.log(new Date().toLocaleString().toString());
    this.informeOT.push({
      datetime: '2021-01-01',
      state: 'Pendiente',
      observation: 'Prueba'
    })
    this.informeOT.push({
      datetime: '2022-02-02',
      state: 'Pendiente2',
      observation: 'Prueba2'
    })

    this.cols = [
      { field: 'datetime', header: 'Fecha / Hora' },
      { field: 'state', header: 'Estado' },
      { field: 'observation', header: 'Observación' }
  ];
  }

  onRowEditInit(index:number) {
  }

  onRowEditCancel(data:Row, index:number) {
  }

  onRowEditSave(data:Row, index: number) {
  }


  showDialog(position: string) {
    this.position = position;
    this.visible = true;
  }
  saveInforme(){
    console.log(this.valueEstadoInforme);
    console.log(this.valueObsInforme);

    this.informeOT.push({
      datetime: new Date().toLocaleString(),
      state: this.valueEstadoInforme!.nombre,
      observation: this.valueObsInforme!
    })

    this.cancel()

  }
  cancel(){
    this.valueEstadoInforme = undefined;
    this.valueObsInforme = undefined;
    this.visible = false;
  }

}
