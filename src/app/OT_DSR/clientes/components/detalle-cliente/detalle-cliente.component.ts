import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ClienteRES } from '../../interfaces/clientes.interface';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styles: [
  ],
  providers: [ConfirmationService],
})
export class DetalleClienteComponent {
  @Input() cliente?: ClienteRES

  @Output() actualizarEvent = new EventEmitter();
  @Output() eliminarEvent = new EventEmitter();

  confimService = inject(ConfirmationService);

  navegarSitioWeb(data: string) {
    // Utilizar window.open() para abrir el sitio web
    let url = `${data}`
    window.open(url, '_blank');
  }

  actualizar() {
    this.actualizarEvent.emit()
  }

  eliminar(event: Event) {
    this.confimService.confirm({
      target: event.target || new EventTarget(),
      message: `¿Estas segur@ de eliminar al cliente?`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.eliminarEvent.emit()
      },
    });
  }
}
