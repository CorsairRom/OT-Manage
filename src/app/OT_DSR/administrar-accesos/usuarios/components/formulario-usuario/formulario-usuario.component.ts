import { Component, EventEmitter, Input, Output, inject, OnInit } from '@angular/core';
import { UsuariosForm, UsuariosResponse, Permiso, PermisoItem } from '../../interfaces/usuario.interface';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';


@Component({
  selector: 'formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styles: [
  ]
})
export class FormularioUsuarioComponent implements OnInit {

  @Input() usuario? : UsuariosResponse
  @Input() title? : string

  @Output() submitEvent = new EventEmitter<UsuariosResponse>();
  @Output() cancelEvent = new EventEmitter<void>();
  dataID?:number;

  permisos: PermisoItem[] = [

    {
      label: Permiso.Administrador,
      value: { is_superuser: true, is_staff: true },
    },
    {
      label: Permiso.Tecnico,
      value: { is_superuser: false, is_staff: true },
    },
  ];



  fb = inject(FormBuilder);
  config = inject(DynamicDialogConfig);
  ref = inject(DynamicDialogRef);
  usuariosService = inject(UsuariosService);
  user?:UsuariosResponse;

  form = this.fb.group({
    username : this.fb.nonNullable.control<string>('', [Validators.required, Validators.maxLength(50)]),
    password : this.fb.nonNullable.control<string>('', [Validators.required, Validators.maxLength(50)]),
    rePassword : this.fb.nonNullable.control<string>('', [Validators.required, Validators.maxLength(50)]),//agregar validador de email
    email : this.fb.nonNullable.control<string>('',[Validators.required]),
    is_active : this.fb.control< boolean>(true,[]),
    permiso: this.fb.control<PermisoItem | null>(null, [Validators.required]),
    nombre : this.fb.nonNullable.control<string>('', [Validators.required, Validators.maxLength(150)]),
    rut : this.fb.nonNullable.control<string>('', [Validators.required, Validators.maxLength(12)]) //agregar validador de rut
  }, {validators: this.passwordMatchValidator.bind(this)})

  ngOnInit(): void {
    if(this.config.data.id){
      this.dataID = this.config.data.id;
      this.getUserByid(this.config.data.id);
    };
  };

  getUserByid(id: number){
    this.usuariosService.getUsuarioById(id).subscribe(user => {
      this.user = user;
      let perm;
      if (user.is_staff === true && user.is_superuser === true){
        perm = this.permisos[0]
      }else{
        perm = this.permisos[1]
      };
      this.form.patchValue({
        ...user,
        permiso: perm
      });

    } );
  };

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const rePassword = control.get('rePassword');

    if (password && rePassword && password.value !== rePassword.value) {
      return { 'passwordMismatch': true };
    };

    return null;
  };

  onRePasswordBlur() {
    console.log('Blur event on rePassword');
    // Ejecutar la validación personalizada en el control del formulario 'rePassword'
    this.form.get('rePassword')?.updateValueAndValidity();
  };

  submit(){
    if(this.form.invalid) return;

    const values = this.form.getRawValue();
    const usuarioForm:UsuariosForm  = {
      username : values.username,
      password : values.password,
      email : values.email,
      is_active : values.is_active!,
      is_staff : false,
      is_superuser : false,
      nombre : values.nombre,
      rut : values.rut
    };

    const permisoSelected = this.form.controls['permiso'].value;

    if(permisoSelected){
      usuarioForm.is_staff = permisoSelected.value.is_staff;
      usuarioForm.is_superuser = permisoSelected.value.is_superuser;
    };

    if (this.user?.id) {
      usuarioForm.id=this.user.id;
      this.usuariosService.updateUsuario(usuarioForm).subscribe(res => this.ref.close())
      return;
    };

    this.usuariosService.addUsuario(usuarioForm).subscribe(res => this.ref.close(res))

  };


  cancel(){
    this.ref.close();
  };

}
