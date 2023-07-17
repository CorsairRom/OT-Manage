import { Component, EventEmitter, Input, OnInit, Output, ViewChild, inject } from '@angular/core';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService, ConfirmEventType, MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { UnidadesResponse } from '../../interfaces/unidades.interface';
import { FormularioUnidadesComponent } from '../formulario-unidades/formulario-unidades.component';
import { TiredMenuComponent } from "src/app/shared/components/tired-menu/tired-menu.component";


@Component({
  selector: 'tabla-unidades',
  templateUrl: './tabla-unidades.component.html',
  styleUrls: ['./tabla-unidades.component.scss'],
  providers: [ConfirmationService, MessageService, DialogService, DynamicDialogRef]
})
export class TablaUnidadesComponent implements OnInit {
  @Input() unidades: UnidadesResponse[] = [];
  @Output() eliminarEvent = new EventEmitter<string>();
  @ViewChild('tiredmenu') tiredMenu: any;



  filterFields: string[] = ['codigo', 'nombre']
  btnDisabled: boolean = true;
  ref: DynamicDialogRef | undefined;
  items: MenuItem[] | undefined;
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private dialogService: DialogService
  ){}
  ngOnInit(): void {
    this.items = [
      {
          label: 'File',
          icon: 'pi pi-fw pi-file',
          items: [
              {
                  label: 'New',
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {
                          label: 'Bookmark',
                          icon: 'pi pi-fw pi-bookmark'
                      },
                      {
                          label: 'Video',
                          icon: 'pi pi-fw pi-video'
                      }
                  ]
              },
              {
                  label: 'Delete',
                  icon: 'pi pi-fw pi-trash'
              },
              {
                  separator: true
              },
              {
                  label: 'Export',
                  icon: 'pi pi-fw pi-external-link'
              }
          ]
      }]
  }
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
