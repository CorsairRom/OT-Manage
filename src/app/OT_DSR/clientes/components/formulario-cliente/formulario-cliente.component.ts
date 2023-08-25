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
  styles: [`
    .btnDEL {
      background-color: red;
      color: white;
    }
    `],

})
export class FormularioClienteComponent implements OnInit {

  @Input() cliente? : ClienteRES
  @Input() title? : string

  @Output() submitEvent = new EventEmitter<ClienteForm>();
  @Output() cancelEvent = new EventEmitter<void>();



  fb = inject(FormBuilder)

  form = this.fb.group({
    comuna_id: this.fb.nonNullable.control<number | null>(null, [Validators.required, Validators.maxLength(50)]),
    razon_social: this.fb.nonNullable.control<string>('', [Validators.required, Validators.maxLength(50)]),
    rut: this.fb.nonNullable.control<string>('',
      [
        Validators.required,
        Validators.pattern(/^(\d{1,2}(?:\.\d{1,3}){2}-[\dkK])$/),
      ],
    ),
    sitio_web: this.fb.control<string | null>(null, []),
    telefono: this.fb.nonNullable.control<number | null >( null, [Validators.required, Validators.pattern(/^(?!(\d)\1{7,}$)\d{9,}$/)]),
    direccion: this.fb.nonNullable.control<string>('', [Validators.required, Validators.maxLength(240)]),
  });

  ngOnInit(): void {
    if (this.cliente){

      this.form.patchValue({
        comuna_id: this.cliente.comuna.id,
        razon_social: this.cliente.razon_social || '',
        rut: this.cliente.rut,
        sitio_web: this.cuttHttp(this.cliente.sitio_web),
        telefono: this.cliente.telefono,
        direccion: this.cliente.direccion
      })
    };
  }

  handleSelectedComuna(comunaId: number | null) {
    this.form.patchValue({ comuna_id: comunaId })
  }


  submit(){
    if(this.form.invalid) return;

    const values = this.form.getRawValue();
    const clienteForm:ClienteForm  = {
      comuna_id: values.comuna_id!,

      razon_social: values.razon_social,
      rut: values.rut,

      sitio_web: this.valueSitioWeb(values.sitio_web),
      telefono: values.telefono!,
      direccion: values.direccion
    };
    if (this.cliente?.id) {
      clienteForm.id=this.cliente.id;
    };

    this.submitEvent.emit(clienteForm);
  }
  cuttHttp(sitioWeb:string | null){
    if(!sitioWeb) return;

    if (sitioWeb.length < 0) return;
    let sitioWebValue:string = '';
    if (sitioWeb.includes('https://'))  return sitioWebValue = sitioWeb.split('https://')[1]
    return sitioWeb
  }

  valueSitioWeb(sitioWeb:string| null){
    if(!sitioWeb) return;

    if (sitioWeb.length < 0) return;
    let sitioWebValue:string = '';
    if (sitioWeb.includes('https://'))  return sitioWebValue = sitioWeb
    if (sitioWeb.includes('www.'))  return sitioWebValue = sitioWeb.replace('www.', 'https://');
    if (sitioWeb.includes('https://www.')) return sitioWebValue = sitioWeb.replace('https://www.', 'https://');
    if (sitioWeb.includes('http://www.'))  return sitioWebValue = sitioWeb.replace('http://www.', 'https://');
    if (!sitioWeb.includes('www.') && !sitioWeb.includes('http://www.') && !sitioWeb.includes('https://www.')) return sitioWebValue = `https://${sitioWeb}`
    return sitioWeb
  }



  cancelar() {
    this.cancelEvent.emit();
  }

}
