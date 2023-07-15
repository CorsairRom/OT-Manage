import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { ServiciosResponse } from '../../interfaces/servicio.interface';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { FormularioServiciosComponent } from '../formulario-servicios/formulario-servicios.component';



@Component({
  selector: 'tabla-servicios',
  templateUrl: './tabla-servicios.component.html',
  styleUrls: ['./tabla-servicios.component.scss'],
  providers: [ConfirmationService, MessageService, DialogService, DynamicDialogRef]
})
export class TablaServiciosComponent {
  @Input() servicios: ServiciosResponse[] = [];
  @Output() eliminarEvent = new EventEmitter<string>();
  @Output() serv: ServiciosResponse | undefined;

  filterFields: string[] = ['codigo', 'nombre', 'fabricante']
  btnDisabled: boolean = true;
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router,
    private dialogService: DialogService
  ){

  }


  ref: DynamicDialogRef | undefined;

  clear(table: Table) {
    table.clear();
  }

  agregar(){
    this.show('');
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
  editar(codigo:string){
    this.show(codigo);
  }

  show(codigo:string) {
    this.ref = this.dialogService.open(FormularioServiciosComponent, {
      data: {
        id: codigo
      },
      header: 'Servicio',
      resizable:false,
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });
    this.ref.onClose.subscribe((data:ServiciosResponse ) =>{
      if(data){
        this.servicios.push(data)
      }
    })
}

}
