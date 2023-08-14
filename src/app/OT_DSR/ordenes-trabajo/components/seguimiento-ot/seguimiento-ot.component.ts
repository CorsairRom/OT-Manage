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
  selectedProcess:any[] = [];

  seguimientoData!: ProcesosOT[];

  seguimientoService = inject(SeguimientoService);



  ngOnInit(): void {
    this.seguimientoService.getProcesosOT().subscribe(seguimientoData => this.seguimientoData = seguimientoData)
  }

  toggleActivitySelection(actividad: Actividades){
    console.log(this.selectedActivity);

  }

  toggleProcessSelection(proceso: ProcesosOT, event:any){
    const processID = proceso.id;
    const processSelected = event.checked as ProcesosOT[]
    const activitySelectd = processSelected.find(p => p.id === processID)?.actividades;

    if (!activitySelectd) {
      const removeAct = this.selectedActivity?.filter(a => a.proceso != processID);
      this.selectedActivity = removeAct;
      return;
    };

    proceso.actividades.forEach( act => {
      if(this.selectedActivity){
        this.selectedActivity = [...this.selectedActivity, act];
      } else {
        this.selectedActivity = [act];
      };
    });
  };


}
