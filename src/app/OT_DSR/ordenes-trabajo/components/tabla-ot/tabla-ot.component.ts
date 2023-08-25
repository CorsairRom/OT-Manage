import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OTResponse,} from '../../interfaces/ot.interface';
import { Table } from 'primeng/table';

@Component({
  selector: 'tabla-ot',
  templateUrl: './tabla-ot.component.html',
  styleUrls: ['./tabla-ot.component.scss']
})
export class TablaOTComponent {
  @Input() ot: OTResponse[] = [];
  @Output() eliminarEvent = new EventEmitter<string>();

  filterFields: string[] = ['id', 'cliente.nombre']



  clear(table: Table) {
    table.clear();
  }


}
