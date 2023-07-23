import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ClienteForm } from '../../interfaces/clientes.interface';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styles: [
  ],

})
export class FormularioClienteComponent {
  @Input() cliente? : ClienteForm
  @Input() title? : string

  @Output() submitEvent = new EventEmitter<ClienteForm>();
  @Output() cancelEvent = new EventEmitter<void>();

  fb = inject(FormBuilder)

  form = this.fb.group({
    comuna: this.fb.nonNullable.control<string>('', [Validators.required, Validators.maxLength(50)]),
    pais: this.fb.control<number | null >(null, []),
    razon_social: this.fb.nonNullable.control<string>('', [Validators.required, Validators.maxLength(50)]),
    rut: this.fb.nonNullable.control<string>('',
      [
        Validators.required,
        Validators.pattern(/^(\d{1,2}(?:\.\d{1,3}){2}-[\dkK])$/),
      ],
    ),
    sitio_web: this.fb.control<string | null>(null, []),
    telefono: this.fb.nonNullable.control<number>(0, [Validators.required]),
    direccion: this.fb.nonNullable.control<string>('', [Validators.required, Validators.maxLength(240)]),
    codigo_postal: this.fb.control<string | null>(null, [])
  });



}
