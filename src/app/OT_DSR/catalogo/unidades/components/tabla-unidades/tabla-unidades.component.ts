import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { Table } from 'primeng/table';
import { UnidadesResponse } from '../../interfaces/unidades.interface';
import { FormularioUnidadesComponent } from '../formulario-unidades/formulario-unidades.component';

@Component({
  selector: 'tabla-unidades',
  templateUrl: './tabla-unidades.component.html',
  styleUrls: ['./tabla-unidades.component.scss'],
  providers: [ConfirmationService, MessageService, DialogService, DynamicDialogRef]
})
export class TablaUnidadesComponent {
  @Input() unidades: UnidadesResponse[] = [];
  @Output() eliminarEvent = new EventEmitter<string>();


  filterFields: string[] = ['codigo', 'nombre']
  btnDisabled: boolean = true;
  ref: DynamicDialogRef | undefined;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private dialogService: DialogService
  ){}
  clear(table: Table) {
    table.clear();
  }

  agregar(){
    this.show(0);
  }

  eliminar(event: Event, codigo: string) {
    console.log(codigo);
    this.confirmationService.confirm({
      target: event.target || new EventTarget(),
      message: `¿Estas segur@ de eliminar este producto?`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.eliminarEvent.emit(codigo)
        this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Se ha borrado exitosamente' });
      },
      key: codigo

    });
  }
  editar(id:number){
    this.show(id);
  }

  show(id:number) {
    this.ref = this.dialogService.open(FormularioUnidadesComponent, {
      data: {
        id: id
      },
      header: 'Servicio',
      resizable:false,
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });
    // this.ref.onClose.subscribe((data:ServiciosResponse ) =>{
    //   if(data){
    //     this.servicios.push(data)
    //   }
    // })
}
}
