import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService, MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { UnidadesResponse } from '../../interfaces/unidades.interface';
import { FormularioUnidadesComponent } from '../formulario-unidades/formulario-unidades.component';
import { items } from "./menu-item";


@Component({
  selector: 'tabla-unidades',
  templateUrl: './tabla-unidades.component.html',
  styleUrls: ['./tabla-unidades.component.scss'],
  providers: [ConfirmationService, MessageService, DialogService, DynamicDialogRef]
})
export class TablaUnidadesComponent implements OnInit {
  @Input() unidades: UnidadesResponse[] = [];
  @Output() eliminarEvent = new EventEmitter<string>();

  selectedItem:UnidadesResponse | undefined;
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
          label: 'Unidad',
          icon: 'pi pi-fw pi-file',
          items: [
              {
                  label: 'Editar',
                  icon: 'pi pi-fw pi-trash',
                  command: (event) => {
                    this.addUnidad(this.selectedItem!)
                  }
              },
              {
                  label: 'Eliminar',
                  icon: 'pi pi-fw pi-external-link'
              }
          ]
      },
      {
          label: 'Subunidad',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {
                  label: 'Agregar',
                  icon: 'pi pi-fw pi-align-left',
                  command: (event) => {
                    this.show(this.selectedItem?.codigo!)
                  }

              },
              {
                  label: 'Editar',
                  icon: 'pi pi-fw pi-align-left'
              },
              {
                  label: 'Eliminar',
                  icon: 'pi pi-fw pi-align-right'
              },

          ]
      }

    ];

  }

  addUnidad(selectItem:UnidadesResponse){
    this.show(selectItem.codigo!)
  }

  addSubunidad(selectItem:any){
    console.log(selectItem);
  }


  clear(table: Table) {
    table.clear();
  }

  agregar(){
    this.show('new');

  }

  onMenuItemClick(event: Event){
    console.log(event);
  }

  public addNewUnidad(event: any){
    alert("click")
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


  show(codigo:string) {
    this.ref = this.dialogService.open(FormularioUnidadesComponent, {
      data: {
        codigo: codigo
      },
      header: 'Registro:',
      resizable:false,
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });
    this.ref.onClose.subscribe((data:UnidadesResponse ) =>{
      if(data){
        this.unidades.push(data)
      }
    })
}
}
