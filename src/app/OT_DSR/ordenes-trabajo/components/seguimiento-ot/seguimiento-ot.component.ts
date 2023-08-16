import { Component, Input, OnInit, inject } from '@angular/core';
import { Actividades, OTResponse, ProcesosOT } from '../../interfaces/ot.interface';
import { SeguimientoService } from '../../services/seguimiento.service';

@Component({
  selector: 'seguimiento-ot',
  templateUrl: './seguimiento-ot.component.html',
  styleUrls: ['./seguimiento-ot.component.scss']
})
export class SeguimientoOTComponent implements OnInit{
  @Input() procesoOT?: ProcesosOT[];

  selectedActivity?:Actividades[];
  selectedProcess?:ProcesosOT[];

  seguimientoService = inject(SeguimientoService);

  ngOnInit(): void {

  }

  toggleActivitySelection(actividad: Actividades){
    const activitySelected =this.selectedActivity?.filter(a => a.proceso == actividad.proceso);
    const actProcess=this.procesoOT!.find(a => a.id == actividad.proceso);
    const activityProcess = actProcess?.actividades;
    const actividadProcesoSelected = actividad.proceso;
    const procesoIFind = actProcess?.id;

    if (activitySelected?.length === activityProcess?.length && actividadProcesoSelected === procesoIFind ) {
      if (this.selectedProcess) {
        this.selectedProcess = [...this.selectedProcess, actProcess!]
      } else {
        this.selectedProcess = [actProcess!]
      };
    } else {
      const removePro = this.selectedProcess?.filter(a => a.id != actividad.proceso);
      this.selectedProcess = removePro;
    };
  };

  toggleProcessSelection(proceso: ProcesosOT, event:any){
    const processID = proceso.id;
    const processSelected = event.checked as ProcesosOT[];
    const indexProcess = this.selectedProcess?.findIndex(p => p.id === processID);

    if (indexProcess === -1) {
      const removeAct = this.selectedActivity?.filter(a => a.proceso != processID);
      this.selectedActivity = removeAct;
    };

    if (processSelected.length !== 0) {
      const activitySelectd = processSelected.find(p => p.id === processID)?.actividades;
      if (!this.selectedActivity) {
        this.selectedActivity = activitySelectd;
      };
      if (activitySelectd) {
        this.selectedActivity = [...new Set(this.selectedActivity), ...activitySelectd!];
      };
    };

  };

}
