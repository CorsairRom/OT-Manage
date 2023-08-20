import { Component, Input, OnInit, inject } from '@angular/core';
import { Actividades, OTResponse, ProcesosOT } from '../../interfaces/ot.interface';
import { FormBuilder } from '@angular/forms';
import { OtService } from '../../services/ot.service';

@Component({
  selector: 'seguimiento-ot',
  templateUrl: './seguimiento-ot.component.html',
  styleUrls: ['./seguimiento-ot.component.scss']
})
export class SeguimientoOTComponent implements OnInit{
  @Input() procesoOT?: ProcesosOT[];

  selectedActivity?:Actividades[];
  selectedProcess?:ProcesosOT[];
  disableSeguimiento: boolean = true;
  disableProcess: boolean = false;

  otService = inject(OtService);
  fb = inject(FormBuilder)

  ngOnInit(): void {

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

  saveSeguimiento(){
    this.disableProcess = true;
  }
  editSeguimiento(){
    this.disableProcess = false;
  }
}
