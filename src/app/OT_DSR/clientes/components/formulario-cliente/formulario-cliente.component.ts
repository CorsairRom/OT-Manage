import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClienteForm } from '../../interfaces/clientes.interface';

@Component({
  selector: 'formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styles: [
  ]
})
export class FormularioClienteComponent {
  @Input() cliente? : ClienteForm
  @Input() title? : string

  @Output() submitEvent = new EventEmitter<ClienteForm>();
  @Output() cancelEvent = new EventEmitter<void>();

}
