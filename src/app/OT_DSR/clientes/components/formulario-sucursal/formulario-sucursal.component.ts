import { Component, EventEmitter, Input, OnInit, Output, inject, OnChanges, SimpleChanges } from '@angular/core';
import { ContactoForm, SucursalesForm, SucursalesResponse } from '../../interfaces/sucursal.interface';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ClientesService } from '../../services/clientes.service';
import { ClienteRES, Contacto } from '../../interfaces/clientes.interface';

@Component({
  selector: 'formulario-sucursal',
  templateUrl: './formulario-sucursal.component.html',
  styles: [
  ]
})
export class FormularioSucursalComponent implements OnInit, OnChanges {

  @Input() sucursal? : SucursalesResponse
  @Input() title? : string;
  @Input() cliente?:ClienteRES;
  @Input() Addnew?: boolean;
  @Input() update?: boolean;

  @Output() submitEvent = new EventEmitter<SucursalesForm>();
  @Output() updatetEvent = new EventEmitter<SucursalesForm>();
  @Output() cancelEvent = new EventEmitter<boolean>();

  IDcliente?: number;

  fb = inject(FormBuilder)

  clienteService = inject(ClientesService)


  form = this.fb.group({
    nombre: this.fb.control<string>('', [Validators.required,Validators.minLength(3), Validators.maxLength(50)]),
    direccion: this.fb.control<string>('', [Validators.required,Validators.minLength(10), Validators.maxLength(150)]),
    cliente: this.fb.control<number>(0,[Validators.required]),
    comuna_id: this.fb.control<number | null>(null,[Validators.required]),
    contactos: this.fb.array<ContactoForm[]>([]),
  });

  get contactos(){
    return (this.form.get('contactos') as FormArray)|| [];
  }

  ngOnInit(): void {
    if(!this.sucursal) return;
    if(this.sucursal){

      this.form.patchValue({
        nombre: this.sucursal.nombre,
        direccion: this.sucursal.direccion,
        cliente: this.sucursal.cliente,
        comuna_id: this.sucursal.comuna.id
      });
      this.contactos.clear();
      this.sucursal.contactos.forEach((contacto:Contacto)=>{
        const Contactoform = this.fb.group({
          id: contacto.id,
          nombre: contacto.nombre,
          apellido: contacto.apellido,
          correo: contacto.correo,
          telefono: contacto.telefono,
        });
        this.contactos.push(Contactoform);
      });

    };


  }


  addContacto() {
    const ContactoFormControl = this.fb.group({
      nombre: this.fb.control<string>('', [Validators.required,Validators.minLength(3), Validators.maxLength(50)]),
      apellido: this.fb.control<string>('', [Validators.required,Validators.minLength(3), Validators.maxLength(50)]),
      correo: this.fb.control<string>('', [Validators.required,Validators.minLength(3), Validators.maxLength(50), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      telefono: this.fb.control<number | null>(null, [Validators.required,Validators.minLength(8), Validators.maxLength(50), Validators.pattern('^[0-9]{9}$')]),
    })
    this.contactos.push(ContactoFormControl)
  }

  handleSelectedComuna(comunaId: number | null) {
    this.form.patchValue({ comuna_id: comunaId })
  }

  deleteContacto(contactoIndex: number) {
    this.contactos.removeAt(contactoIndex);
  }

  Submit(){

    if(this.form.invalid) return;
    const values = this.form.getRawValue();
    const SucursalForm: SucursalesForm = {
      nombre: values.nombre!,
      direccion: values.direccion!,
      cliente: 1,
      comuna_id: values.comuna_id!,
      contactos: values.contactos as ContactoForm[],
    };

    if(this.sucursal?.id){

      SucursalForm.id = this.sucursal.id;
      // console.log(SucursalForm);
      this.submitEvent.emit(SucursalForm);
      this.form.reset();
      setTimeout(() => {this.cancelEvent.emit(false)}, 500);
      return;
    }

    this.submitEvent.emit(SucursalForm);
    this.form.reset();

    setTimeout(() => {this.cancelEvent.emit(false)}, 500);
  }


  Cancel(){
    this.form.reset();
    // this.contactos.clear();
    this.cancelEvent.emit(false);
  }
  ngOnChanges(changes: SimpleChanges) {
    // Detecta los cambios en las propiedades de entrada, incluido clienteID
    if (changes['cliente'] && changes['cliente'].currentValue !== undefined) {
      this.IDcliente = this.cliente!.id;
      this.form.patchValue({cliente: this.IDcliente});
    }
    if (changes['Addnew'] && changes['Addnew'].currentValue !== undefined) {
      console.log(this.Addnew);
      this.form.reset();
    }


    }





}
