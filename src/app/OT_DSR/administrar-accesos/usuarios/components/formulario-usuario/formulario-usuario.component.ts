import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { UsuariosForm, UsuariosResponse } from '../../interfaces/usuario.interface';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styles: [
  ]
})
export class FormularioUsuarioComponent {
  @Input() usuario? : UsuariosResponse
  @Input() title? : string

  @Output() submitEvent = new EventEmitter<UsuariosForm>();
  @Output() cancelEvent = new EventEmitter<void>();

  permisos: any[] = [
    {label: 'Administrador', value: {is_superuser: true, is_staff: true}},
    {label: 'Técnico', value: {is_superuser: false, is_staff: false}}
  ];

  fb = inject(FormBuilder)

  form = this.fb.group({
    username : this.fb.nonNullable.control<string>('', [Validators.required, Validators.maxLength(50)]),
    email : this.fb.nonNullable.control<string>('',[Validators.required]),
    is_active : this.fb.control< boolean>(true,[]),
    is_staff : this.fb.control<boolean>(false),
    is_superuser : this.fb.control<boolean>(false),
    nombre : this.fb.nonNullable.control<string>('', [Validators.required, Validators.maxLength(150)]),
    rut : this.fb.nonNullable.control<string>('', [Validators.required, Validators.maxLength(12)]) //agregar validador de rut
  })

  submit(){
    if(this.form.invalid) return;

    const values = this.form.getRawValue();
    const usuarioForm:UsuariosForm  = {
      username : values.username,
      email : values.email,
      is_active : values.is_active!,
      is_staff : values.is_staff!,
      is_superuser : values.is_superuser!,
      nombre : values.nombre,
      rut : values.nombre
    };

    if (this.usuario?.id) {
      usuarioForm.id=this.usuario.id;
    };
    console.log(usuarioForm);
    this.submitEvent.emit(usuarioForm);
  }


  cancelar() {
    this.cancelEvent.emit();
  }

}
