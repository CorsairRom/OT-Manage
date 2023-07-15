import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicioService } from '../../services/servicio.service';
import { ServiciosForm, ServiciosResponse } from '../../interfaces/servicio.interface';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-formulario-servicios',
  templateUrl: './formulario-servicios.component.html',
  styleUrls: ['./formulario-servicios.component.scss']
})
export class FormularioServiciosComponent {
  opcionesEstadoServicio: {label: string; value: boolean}[] = [
    { label: 'Activo', value: true },
    { label: 'Inactivo', value: false },
  ]
  fb = inject(FormBuilder)
  servicioService = inject(ServicioService)
  ref = inject(DynamicDialogRef)
  public title?: string;
  data: ServiciosResponse | undefined ;

  form = this.fb.group({
    codigo: this.fb.control<string>('',[Validators.required,Validators.minLength(5), Validators.maxLength(12)] ),
    servicio: this.fb.control<string>('',[Validators.required, Validators.minLength(5) ,Validators.maxLength(50)] ),
    estado: this.fb.control<boolean>(true, [ Validators.required]),
    precio: this.fb.control<number>(0, [Validators.required, Validators.min(1), Validators.max(999999999)] )
  })

  submit(){
    if (this.form.invalid) return;
    const values = this.form.getRawValue();

    const servicioForm: ServiciosForm = {
      codigo: values.codigo!,
      nombre: values.servicio!,
      estado: values.estado!,
      precio: values.precio!
    }

    this.servicioService.addProducto(servicioForm).subscribe( res => this.ref.close(res));



  }
  cancel(){
    this.ref.close();
  }

}
