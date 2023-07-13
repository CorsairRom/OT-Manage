import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Table } from 'primeng/table';
import { Producto } from '../../interfaces/productos.model';

@Component({
  selector: 'tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.scss']
})
export class TablaProductosComponent {
  @Input() productos: Producto[] = [];


  filterFields: string[] = ['codigo', 'nombre', 'fabricante']

  clear(table: Table) {
    table.clear();
  }
}
