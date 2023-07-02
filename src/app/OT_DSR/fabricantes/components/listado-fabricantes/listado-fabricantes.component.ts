import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Fabricantes } from '../../interfaces/fabricantes.model';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-listado-fabricantes',
  templateUrl: './listado-fabricantes.component.html',
  styleUrls: ['./listado-fabricantes.component.scss']
})
export class ListadoFabricantesComponent {

  @Input() fabricantes: Fabricantes[] = [];

  @Output() registrarEvent = new EventEmitter()
  @Output() detalleEvent = new EventEmitter<number>()

  filterFields: string[] = ['nombre']
  valorRecibido: string ='';
  registrar(txt: string) {
    this.registrarEvent.emit(txt)
  }


  detalle(fabricante: Fabricantes) {
    this.detalleEvent.emit(fabricante.id)
  }

  clear(table: Table) {
    table.clear();
  }

}
