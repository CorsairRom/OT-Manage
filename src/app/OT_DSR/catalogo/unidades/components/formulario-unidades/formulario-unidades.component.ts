import { Component, Input, OnInit, inject } from '@angular/core';
import { UnidadesResponse, SubunidadResponse } from '../../interfaces/unidades.interface';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UnidadesService } from '../../services/unidades.service';


@Component({
  selector: 'app-formulario-unidades',
  templateUrl: './formulario-unidades.component.html',
  styleUrls: ['./formulario-unidades.component.scss']
})
export class FormularioUnidadesComponent implements OnInit {


  opcionesEstadoUnidades: {label: string; value: boolean}[] = [
    { label: 'Activo', value: true },
    { label: 'Inactivo', value: false },
  ]

  public title?: string;
  data: UnidadesResponse | undefined ;
  templateAdd: boolean = false;

  // public newSubunidades: FormGroup = new FormGroup({
  //   codigo: new FormControl(''),
  //   nombre: new FormControl(''),
  // });

  fb = inject(FormBuilder)
  config = inject(DynamicDialogConfig)
  unidadesService = inject(UnidadesService)
  ref = inject(DynamicDialogRef)

  form = this.fb.group({
    codigo: this.fb.control<string>('',[Validators.required,Validators.minLength(5), Validators.maxLength(12)] ),
    nombre: this.fb.control<string>('',[Validators.required, Validators.minLength(5) ,Validators.maxLength(50)] ),
    estado: this.fb.control<boolean>(true, [ Validators.required]),
    subunidades: this.fb.array<SubunidadResponse[]>([])
  })

  get subunidades(){
    return this.form.get('subunidades') as FormArray;
  }

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
  addNewSubunidad(){
    const subunidadForm = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required]
  });

  this.subunidades.push(subunidadForm);

  }

  deleteSubunidad(subunidadIndex: number) {
    this.subunidades.removeAt(subunidadIndex);
  }

  addDataForm(data:UnidadesResponse){
    if(!data) return;
    this.form.controls['codigo'].disable();
    this.form.patchValue({
      codigo: data.codigo?.toUpperCase(),
      nombre: data.nombre.toUpperCase(),
      estado: data.estado,
      subunidades: data.subunidades
    })
    // Limpiar las subunidades previas del FormArray

    this.subunidades.clear();

    // Iterar sobre la lista de subunidades y agregar cada una al FormArray
    data.subunidades.forEach((subunidad: SubunidadResponse) => {

      const subunidadFormGroup = this.fb.group({
        codigo: [subunidad.codigo],
        nombre: [subunidad.nombre],
      });
      this.subunidades.push(subunidadFormGroup);
    });

    this.data = data;

  }


  submit(){
    if (this.form.invalid) return;
    const values = this.form.getRawValue();


    const UnidadesForm: UnidadesResponse = {
      codigo: values.codigo!.toUpperCase(),
      nombre: values.nombre!.toUpperCase(),
      estado: values.estado!,
      subunidades:values.subunidades! as SubunidadResponse[]
    }

    if (this.data?.codigo && !this.form.pristine || !this.form.controls['subunidades'].pristine) {
      const newSub:SubunidadResponse[] = UnidadesForm.subunidades.map( sub => {
        return {
          codigo: sub.codigo,
          nombre: sub.nombre,
          unidad: sub.unidad,
          estado: sub.estado
        }
      })

      const newForm:UnidadesResponse = {
        codigo: UnidadesForm.codigo,
        nombre: UnidadesForm.nombre,
        estado: UnidadesForm.estado,
        subunidades: newSub
      }
      console.log('Pase por el if');
      console.log(this.data?.codigo);
      this.unidadesService.updateUnidad( newForm, this.data!.codigo! ).subscribe();
      this.ref.close();
    } else {
      console.log('pase al else');


      this.unidadesService.addUnidades(UnidadesForm).subscribe( res => this.ref.close(res));
      this.ref.close();
    }

  }
  cancel(){
    this.ref.close();
  }

  toggleSubunidades(){
    this.templateAdd = !this.templateAdd
  }


}
