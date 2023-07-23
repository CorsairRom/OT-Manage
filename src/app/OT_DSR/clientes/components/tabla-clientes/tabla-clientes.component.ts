import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClienteResponse } from '../../interfaces/clientes.interface';
import { Table } from 'primeng/table';

@Component({
  selector: 'tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.scss']
})
export class TablaClientesComponent {
  @Input() clientes: ClienteResponse[] = [];
  @Output() eliminarEvent = new EventEmitter<string>();

  filterFields: string[] = ['rut', 'nombre']

  clear(table: Table) {
    table.clear();
  }

  agregar(){
    console.log('agregar');

  }
}
