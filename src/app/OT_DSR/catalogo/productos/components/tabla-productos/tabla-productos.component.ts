import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Table } from 'primeng/table';
import { Producto, ProductosResponse } from '../../interfaces/productos.model';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';

@Component({
  selector: 'tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class TablaProductosComponent {
  @Input() productos: ProductosResponse[] = [];
  @Output() eliminarEvent = new EventEmitter<number>();

  confimService = inject(ConfirmationService);
  messageService = inject(MessageService)
  filterFields: string[] = ['codigo', 'nombre', 'fabricante']

  clear(table: Table) {
    table.clear();
  }
  eliminar(event: Event, index: number) {
    console.log(index);
    this.confimService.confirm({
      target: event.target || new EventTarget(),
      message: `¿Estas segur@ de eliminar este producto?`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.eliminarEvent.emit(index)
        this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Se ha borrado exitosamente' });
      },
      key: index.toString()

    });
  }

}
