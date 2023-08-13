import { Component, Input } from '@angular/core';
import { OTResponse, ProcesosOT } from '../../interfaces/ot.interface';

@Component({
  selector: 'seguimiento-ot',
  templateUrl: './seguimiento-ot.component.html',
  styleUrls: ['./seguimiento-ot.component.scss']
})
export class SeguimientoOTComponent {

  @Input() procesoOT?: ProcesosOT[];

}
