import { Component, EventEmitter, Input, Output, inject, OnInit } from '@angular/core';
import { ClienteForm, ClienteRES } from '../../interfaces/clientes.interface';
import { FormBuilder, Validators } from '@angular/forms';

interface Pais {
  id: number;
  nombre: string;
}

@Component({
  selector: 'formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styles: [
  ],

})
export class FormularioClienteComponent implements OnInit {

  @Input() cliente? : ClienteRES
  @Input() title? : string

  @Output() submitEvent = new EventEmitter<ClienteForm>();
  @Output() cancelEvent = new EventEmitter<void>();

  opcionesPais:Pais[] = [
    { id: 45, nombre: 'Chile' }, // Opción con id 45 (Chile)
    // Otras opciones de países si las tienes
  ];
  paisActual:Pais | null = null

  componentComunaRegion: boolean = false;

  fb = inject(FormBuilder)

  form = this.fb.group({
    comuna_id: this.fb.nonNullable.control<number | null>(null, [Validators.required, Validators.maxLength(50)]),
    pais: this.fb.control<Pais | null >(null, [Validators.required]),
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

  ngOnInit(): void {
    if (this.cliente){

      this.form.patchValue({
        comuna_id: this.cliente.comuna.id,
        razon_social: this.cliente.razon_social || '',
        rut: this.cliente.rut,
        sitio_web: this.cliente.sitio_web,
        telefono: this.cliente.telefono,
        direccion: this.cliente.direccion,
        codigo_postal: this.cliente.codigo_postal
      })
      if(this.cliente.pais){
        this.paisActual = { id: this.cliente.pais.id, nombre: this.cliente.pais.name };
        // Buscar el objeto Pais que coincide con el id del cliente
        const selectedPais = this.opcionesPais.find((pais) => pais.id === this.cliente?.pais.id);
        if (selectedPais) {
          this.form.get('pais')?.setValue(selectedPais); // Establecer el valor del control pais
          this.componentComunaRegion = true;
        }
      };

    };
  }

  handleSelectedComuna(comunaId: number | null) {
    this.form.patchValue({ comuna_id: comunaId })
  }

  onPaisSelect(event: any) {

    if (event.value.id === 45) {

      this.form.patchValue({pais: {id: event.value.id, nombre: event.value.nombre}})
      this.componentComunaRegion = true;

    };
  }

  submit(){
    if(this.form.invalid) return;

    const values = this.form.getRawValue();
    const clienteForm:ClienteForm  = {
      comuna_id: values.comuna_id!,
      pais_id: values.pais?.id,
      razon_social: values.razon_social,
      rut: values.rut,
      sitio_web: values.sitio_web,
      telefono: values.telefono,
      direccion: values.direccion,
      codigo_postal: values.codigo_postal!
    };
    if (this.cliente?.id) {
      clienteForm.id=this.cliente.id;
    };

    this.submitEvent.emit(clienteForm);
  }

  cancelar() {
    this.cancelEvent.emit();
  }

}
