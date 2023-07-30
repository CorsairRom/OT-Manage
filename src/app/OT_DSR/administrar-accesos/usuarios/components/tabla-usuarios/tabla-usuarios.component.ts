import { Component, Input } from '@angular/core';
import { UsuariosResponse } from '../../interfaces/usuario.interface';
import { Table } from 'primeng/table';

@Component({
  selector: 'tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.scss']
})
export class TablaUsuariosComponent {
  @Input() usuarios:UsuariosResponse[] = [];
  filterFields: string[] = ['usuario', 'nombre']

  clear(table: Table) {
    table.clear();
  }


}
