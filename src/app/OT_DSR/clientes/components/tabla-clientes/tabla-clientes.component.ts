import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClienteRES } from '../../interfaces/clientes.interface';
import { Table } from 'primeng/table';

@Component({
  selector: 'tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.scss']
})
export class TablaClientesComponent {
  @Input() clientes: ClienteRES[] = [];
  @Output() eliminarEvent = new EventEmitter<string>();

  filterFields: string[] = ['rut', 'razon_social']

  clear(table: Table) {
    table.clear();
  }

  agregar(){
    console.log('agregar');

  }
  navegarSitioWeb(data: string) {
    // Utilizar window.open() para abrir el sitio web
    let url = `${data}`
    window.open(url, '_blank');
  }
}
