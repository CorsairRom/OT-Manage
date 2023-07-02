import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Fabricantes } from '../../interfaces/fabricantes.model';

@Component({
  selector: 'app-listado-fabricantes',
  templateUrl: './listado-fabricantes.component.html',
  styleUrls: ['./listado-fabricantes.component.scss']
})
export class ListadoFabricantesComponent {

  @Input() fabricantes: Fabricantes[] = [];

  @Output() registrarEvent = new EventEmitter()
  @Output() detalleEvent = new EventEmitter<number>()


  registrar() {
    this.registrarEvent.emit()
  }


  detalle(fabricante: Fabricantes) {
    this.detalleEvent.emit(fabricante.id)
  }
}
