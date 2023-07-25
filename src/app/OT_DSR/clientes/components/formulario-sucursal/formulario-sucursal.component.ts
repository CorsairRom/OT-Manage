import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ContactoForm, SucursalesForm, SucursalesResponse } from '../../interfaces/sucursal.interface';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'formulario-sucursal',
  templateUrl: './formulario-sucursal.component.html',
  styles: [
  ]
})
export class FormularioSucursalComponent implements OnInit {

  @Input() sucursal? : SucursalesResponse
  @Input() title? : string;
  @Input() IDcliente!: number;

  @Output() submitEvent = new EventEmitter<SucursalesForm>();
  @Output() cancelEvent = new EventEmitter<void>();

  fb = inject(FormBuilder)

  form = this.fb.group({
    nombre: this.fb.control<string>('', [Validators.required,Validators.minLength(3), Validators.maxLength(50)]),
    direccion: this.fb.control<string>('', [Validators.required,Validators.minLength(10), Validators.maxLength(150)]),
    cliente: this.fb.control<number>(this.IDcliente,[Validators.required]),
    comuna_id: this.fb.control<number | null>(null,[Validators.required]),
    contactos: this.fb.array<ContactoForm[]>([]),
  });

  get contactos(){
    return (this.form.get('contactos') as FormArray)|| [];
  }

  ngOnInit(): void {
    console.log(this.sucursal);
    if(!this.sucursal) return;
  }

  addContacto() {
    const ContactoFormControl = this.fb.group({
      nombre: this.fb.control<string>('', [Validators.required,Validators.minLength(3), Validators.maxLength(50)]),
      apellido: this.fb.control<string>('', [Validators.required,Validators.minLength(3), Validators.maxLength(50)]),
      correo: this.fb.control<string>('', [Validators.required,Validators.minLength(3), Validators.maxLength(50)]),
      telefono: this.fb.control<number>(0, [Validators.required,Validators.minLength(3), Validators.maxLength(50)]),
    })
    this.contactos.push(ContactoFormControl)
  }

  handleSelectedComuna(comunaId: number | null) {
    this.form.patchValue({ comuna_id: comunaId })
  }

  deleteSubunidad(contactoIndex: number) {
    this.contactos.removeAt(contactoIndex);
  }

  Submit(){
    if(this.form.invalid) return;
    const values = this.form.getRawValue();
    const SucursalForm: SucursalesForm = {
      nombre: values.nombre!,
      direccion: values.direccion!,
      cliente: values.cliente!,
      comuna_id: values.comuna_id!,
      contactos: values.contactos as ContactoForm[],
    };
    this.submitEvent.emit(SucursalForm);
    this.form.reset();

  }


  Cancel(){
    this.cancelEvent.emit();
  }

}
