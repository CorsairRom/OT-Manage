import { Component, Input, OnInit, inject } from '@angular/core';
import { UnidadesResponse } from '../../interfaces/unidades.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UnidadesService } from '../../services/unidades.service';


@Component({
  selector: 'app-formulario-unidades',
  templateUrl: './formulario-unidades.component.html',
  styleUrls: ['./formulario-unidades.component.scss']
})
export class FormularioUnidadesComponent implements OnInit {


  opcionesEstadoServicio: {label: string; value: boolean}[] = [
    { label: 'Activo', value: true },
    { label: 'Inactivo', value: false },
  ]

  public title?: string;
  data: UnidadesResponse | undefined ;


  fb = inject(FormBuilder)
  config = inject(DynamicDialogConfig)
  unidadesService = inject(UnidadesService)
  ref = inject(DynamicDialogRef)

  form = this.fb.group({
    codigo: this.fb.control<string>('',[Validators.required,Validators.minLength(5), Validators.maxLength(12)] ),
    nombre: this.fb.control<string>('',[Validators.required, Validators.minLength(5) ,Validators.maxLength(50)] ),
    estado: this.fb.control<boolean>(true, [ Validators.required]),
  })

  ngOnInit(): void {
    if(!this.config.data) return;
    if ( this.config.data.codigo == 'new' ) {
      console.log('new');
    } else{
      let codigo = this.config.data.codigo
      this.unidadesService.getUnidadesById(codigo).subscribe(
        unidades => this.addDataForm(unidades)
      )

    }

  }

  addDataForm(data:UnidadesResponse){
    if(!data) return;
    this.form.controls['codigo'].disable();
    this.form.patchValue({
      codigo: data.codigo?.toUpperCase(),
      nombre: data.nombre.toUpperCase(),
      estado: data.estado,
    })
    this.data = data;

  }

  submit(){
    if (this.form.invalid) return;
    const values = this.form.getRawValue();


    const UnidadesForm: UnidadesResponse = {
      codigo: values.codigo!.toUpperCase(),
      nombre: values.nombre!.toUpperCase(),
      estado: values.estado!,
      subunidades:[]
    }

    if (this.data?.codigo && !this.form.pristine) {
      this.unidadesService.updateUnidad( UnidadesForm, this.data.codigo ).subscribe();
      this.ref.close();
    } else {
      this.unidadesService.addUnidades(UnidadesForm).subscribe( res => this.ref.close(res));
      this.ref.close();
    }

  }
  cancel(){
    this.ref.close();
  }


}
