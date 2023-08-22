import { Component, Input, OnInit, inject } from '@angular/core';
import { Actividades, OTResponse, ProcesosOT, Seguimiento } from '../../interfaces/ot.interface';
import { FormBuilder } from '@angular/forms';
import { OtService } from '../../services/ot.service';
import { MensajeService } from 'src/app/OT_DSR/core/services/message.service';
import { EstadoActividades } from '../../interfaces/seguimiento-ot.interface';
import { SeguimientoService } from '../../services/seguimiento.service';

@Component({
  selector: 'seguimiento-ot',
  templateUrl: './seguimiento-ot.component.html',
  styleUrls: ['./seguimiento-ot.component.scss']
})
export class SeguimientoOTComponent implements OnInit{
  @Input() procesoOT?: ProcesosOT[];
  @Input() idOT?: number;
  @Input() ot?: OTResponse;

  selectedActivity:Actividades[] = [];
  selectedProcess?:ProcesosOT[];
  disableSeguimiento: boolean = true;
  disableProcess: boolean = false;

  private otService = inject(OtService);
  private fb = inject(FormBuilder);
  private messageService = inject(MensajeService);
  private serviceSeguimiento = inject(SeguimientoService);

  ngOnInit(): void {
    // console.log(this.ot?.seguimiento?.length);
    if (this.ot!.seguimiento!.length > 0) {
      this.ot?.seguimiento?.forEach( seg => {
        this.chargeProcess(seg.proceso.id)
        seg.estado_actividades.forEach(act=>{
          console.log(act.actividad.id);
          this.chargeActivities(act.actividad.id, seg.proceso.id)
        })
      })
    }
  }

  chargeProcess(id:number){
    this.serviceSeguimiento.getProcesoOTById(id).subscribe(p=> this.selectedProcess = [p])
  }

  chargeActivities(idAct:number, idProcess:number){


    this.serviceSeguimiento.getProcesoOTById(idProcess).subscribe(res => {
      const activity = res.actividades.find(a=> a.id === idAct)
      console.log(this.selectedActivity.length === 0);
      if (this.selectedActivity.length === 0) {
        this.selectedActivity = [activity!]
      }else{
        this.selectedActivity = [...this.selectedActivity, activity!]
      }
    })

  }

  isActivityDisabled(actividad: any): boolean {
    if (!this.selectedProcess) {
      return true;
    }
    return !this.selectedProcess.some(sp => sp.id === actividad.proceso);
  }


  toggleActivitySelection(actividad: Actividades){

  };

  toggleProcessSelection(proceso: ProcesosOT, event:any){
    const processID = proceso.id;
    const processSelected = event.checked as ProcesosOT[];
    const indexProcess = this.selectedProcess?.findIndex(p => p.id === processID);
    this.disableSeguimiento = false
    if (indexProcess === -1) {
      const removeAct = this.selectedActivity?.filter(a => a.proceso != processID);
      this.selectedActivity = removeAct;
    };
  };

  saveSeguimiento(id:number){
    if(!id) return;
    if (!this.selectedProcess || !this.selectedActivity) {
      this.messageService.addMessage({
        details: ['Seleccione una actividad antes de guardar'],
        role: 'warn'
      })
      return;
    };

    const procesosSinActividades = this.selectedProcess!.map(proceso => {
      return {
        proceso_id: proceso.id,
        estado_actividades: this.selectedActivity!.filter(a => a.proceso === proceso.id).map( act => {
          const estado_act : EstadoActividades = {
            actividad_id: act.id
          }
          return estado_act;
        })
      };
    });
    const seguimiento = {
      seguimiento: procesosSinActividades
    }
    this.otService.addSeguimiento(id, seguimiento).subscribe()

    this.disableProcess = true;
  }
  editSeguimiento(){
    this.disableProcess = false;
  }
}
