import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Table } from 'primeng/table';
import { Producto, ProductosResponse } from '../../interfaces/productos.model';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { DetalleProductoPageComponent } from "../../pages/detalle-producto-page/detalle-producto-page.component";
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DetalleDialogComponent } from '../detalle-dialog/detalle-dialog.component';

@Component({
  selector: 'tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.scss'],
  providers: [ConfirmationService, MessageService, DialogService, DynamicDialogRef]
})
export class TablaProductosComponent {

  @Input() productos: ProductosResponse[] = [];
  @Output() eliminarEvent = new EventEmitter<number>();

  filterFields: string[] = ['codigo', 'nombre']

  confimService = inject(ConfirmationService);
  messageService = inject(MessageService)
  router = inject(Router)
  dialogService = inject(DialogService)

  ref: DynamicDialogRef | undefined;

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

  editar(id:number){
    this.router.navigate(['catalogo','productos', id, 'editar'])
  }
  show(id:number) {
    this.ref = this.dialogService.open(DetalleDialogComponent, {
      data: {
        id: id
      },
      header: 'Select a Product',
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });
}

}
