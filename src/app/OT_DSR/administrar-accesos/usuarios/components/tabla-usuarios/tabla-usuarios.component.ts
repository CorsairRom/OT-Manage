import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { UsuariosResponse } from '../../interfaces/usuario.interface';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService} from 'primeng/api';
import { Table } from 'primeng/table';
import { FormularioUsuarioComponent } from '../formulario-usuario/formulario-usuario.component';


@Component({
  selector: 'tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.scss'],
  providers: [ConfirmationService, MessageService, DialogService, DynamicDialogRef]
})
export class TablaUsuariosComponent {
  @Input() usuarios:UsuariosResponse[] = [];
  @Output() eliminarEvent = new EventEmitter<string>();

  filterFields: string[] = ['usuario', 'nombre']

  btnDisabled: boolean = true;
  ref: DynamicDialogRef | undefined;

  private confirmationService = inject(ConfirmationService)
  private messageService = inject(MessageService)
  private dialogService = inject(DialogService)

  clear(table: Table) {
    table.clear();
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
  };

  editar(id:number){
    this.show(id);
  };

  show(id:number) {
    this.ref = this.dialogService.open(FormularioUsuarioComponent, {
      data: {
        id: id
      },
      header: 'Registro',
      maximizable: false,
      resizable:false,
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,

    });
    this.ref.onClose.subscribe((data: UsuariosResponse ) =>{
      if(data){
        this.usuarios.push(data)
      };
    });
  };


}
