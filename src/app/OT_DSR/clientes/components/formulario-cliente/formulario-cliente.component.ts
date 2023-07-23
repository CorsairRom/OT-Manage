import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ClienteForm, ClienteResponse } from '../../interfaces/clientes.interface';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styles: [
  ],

})
export class FormularioClienteComponent {
  @Input() cliente? : ClienteResponse
  @Input() title? : string

  @Output() submitEvent = new EventEmitter<ClienteForm>();
  @Output() cancelEvent = new EventEmitter<void>();

  opcionesPais = [
     // Opción por defecto (null)
    { id: 45, nombre: 'Chile' }, // Opción con id 45 (Chile)
    // Otras opciones de países si las tienes
  ];

  componentComunaRegion: boolean = false;

  fb = inject(FormBuilder)

  form = this.fb.group({
    comuna_id: this.fb.nonNullable.control<number | null>(null, [Validators.required, Validators.maxLength(50)]),
    pais: this.fb.control<number | null >(null, [Validators.required]),
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
    codigo_postal: this.fb.control<number | null>(null, [])
  });

  handleSelectedComuna(comunaId: number | null) {
    this.form.patchValue({ comuna_id: comunaId })
  }

  onPaisSelect(event: any) {
    if (event.value.id === 45) {
      this.form.patchValue({pais: event.value.id})
      this.componentComunaRegion = true;
    }
  }

  submit(){
    if(this.form.invalid) return;

    const values = this.form.getRawValue();
    const clienteForm:ClienteForm  = {
      comuna_id: values.comuna_id!,
      pais: values.pais,
      razon_social: values.razon_social,
      rut: values.rut,
      sitio_web: values.sitio_web,
      telefono: values.telefono,
      direccion: values.direccion,
      codigo_postal: values.codigo_postal!
    }


    this.submitEvent.emit(clienteForm);
  }

  cancelar() {
    this.cancelEvent.emit();
  }

}
