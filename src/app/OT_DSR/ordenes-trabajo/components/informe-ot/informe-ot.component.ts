import { Component, Input, OnInit, inject } from '@angular/core';
import { informeOTResponse, informeOTForm, PatchInformeOT } from '../../interfaces/informe-ot.interface';
import { SeguimientoService } from '../../services/seguimiento.service';
import { ProcesoOTSelect } from '../../interfaces/procesos-ot.interface';
import { map } from 'rxjs';
import { InformeOTService } from '../../services/informe-ot.service';


interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'informe-ot',
  templateUrl: './informe-ot.component.html',
  styleUrls: ['./informe-ot.component.scss']
})
export class InformeOTComponent implements OnInit {

  @Input() otID!: number;

  infoOT$: informeOTResponse[] = [];
  cols!: Column[];
  valueEstadoInforme?: ProcesoOTSelect;
  valueSelectProceso: ProcesoOTSelect[] = []

  visible: boolean = false;
  position: string = 'center';
  valueObsInforme?: string;
  textArea: any = '';

  private seguimientoService = inject(SeguimientoService)
  private informeService = inject(InformeOTService)

  ngOnInit(): void {


    this.informeService.getInforme_OT().subscribe(informe => {
      this.infoOT$ = informe
    })
    this.seguimientoService.getProcesosOT().pipe(
      map(process => process.map(proc => {
        return {
          id: proc.id,
          nombre: proc.nombre
        }
      }))
    ).subscribe(proc => this.valueSelectProceso = proc);
    console.log(new Date().toLocaleString().toString());


    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'add_date', header: 'Fecha / Hora' },
      { field: 'estado_orden', header: 'Estado' },
      { field: 'informe', header: 'Observación' }
    ];
  }

  onRowEditInit(index:number) {

  }

  onRowEditCancel(data:informeOTForm, index:number) {

  }

  onRowEditSave(data:informeOTForm, index: number) {

    const pathInforme:PatchInformeOT = {
      id: data.id!,
      informe: data.informe
    }
    this.informeService.updateServicio(pathInforme).subscribe();
    console.log(pathInforme);

  }


  showDialog(position: string) {
    this.position = position;
    this.visible = true;
  }
  saveInforme(){

    if (!this.valueEstadoInforme || !this.valueObsInforme) {
      return
    }

    const informeData = {
      ot: this.otID,
      estado_orden: this.valueEstadoInforme.nombre,
      informe: this.valueObsInforme
    }

    this.informeService.addInforme_OT(informeData).subscribe(informe => {
      this.infoOT$.push(informe)
    })
    this.cancel()

  }
  cancel(){
    this.valueEstadoInforme = undefined;
    this.valueObsInforme = undefined;
    this.visible = false;
  }

  getObservacion(id: number){
    console.log(id);
  }

}
