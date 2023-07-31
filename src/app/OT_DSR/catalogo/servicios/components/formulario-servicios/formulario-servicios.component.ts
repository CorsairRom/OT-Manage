import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicioService } from '../../services/servicio.service';
import { ServiciosForm, ServiciosResponse } from '../../interfaces/servicio.interface';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { tap } from 'rxjs';

@Component({
  selector: 'app-formulario-servicios',
  templateUrl: './formulario-servicios.component.html',
  styleUrls: ['./formulario-servicios.component.scss']
})
export class FormularioServiciosComponent implements OnInit {

  opcionesEstadoServicio: {label: string; value: boolean}[] = [
    { label: 'Activo', value: true },
    { label: 'Inactivo', value: false },
  ]

  public title?: string;
  data: ServiciosResponse | undefined ;


  fb = inject(FormBuilder)
  servicioService = inject(ServicioService)
  config = inject(DynamicDialogConfig)
  ref = inject(DynamicDialogRef)


  form = this.fb.group({
    codigo: this.fb.control<string>('',[Validators.required,Validators.minLength(5), Validators.maxLength(12)] ),
    servicio: this.fb.control<string>('',[Validators.required, Validators.minLength(5) ,Validators.maxLength(50)] ),
    estado: this.fb.control<boolean>(true, [ Validators.required]),
    precio: this.fb.control<number>(0, [Validators.required, Validators.min(1), Validators.max(999999999)] )
  })


  ngOnInit(): void {
    if (this.config.data.id > 0) {
      this.servicioService.getServicioById(this.config.data.id).subscribe(
        data => this.addDataForm(data)
      );
    };

  }

  addDataForm(data:ServiciosResponse){
    if(!data) return;
    this.form.controls['codigo'].disable();
    this.form.patchValue({
      codigo: data.codigo,
      servicio: data.nombre,
      estado: data.estado,
      precio: data.precio
    })
    this.data = data;

  }

  submit(){
    if (this.form.invalid) return;
    const values = this.form.getRawValue();


    const servicioForm: ServiciosForm = {
      codigo: values.codigo!,
      nombre: values.servicio!,
      estado: values.estado!,
      precio: values.precio!
    }

    if (this.data?.id && !this.form.pristine) {
      this.servicioService.updateServicio( servicioForm, this.data.id ).subscribe();
      this.ref.close();
    } else {
      this.servicioService.addProducto(servicioForm).subscribe( res => this.ref.close(res));
      this.ref.close();
    }

  }
  cancel(){
    this.ref.close();
  }

}
