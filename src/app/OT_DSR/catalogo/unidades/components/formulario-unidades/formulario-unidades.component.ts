import { Component, OnInit, inject } from '@angular/core';
import {
  UnidadesResponse,
  SubunidadResponse,
} from '../../interfaces/unidades.interface';
import {
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UnidadesService } from '../../services/unidades.service';

@Component({
  selector: 'app-formulario-unidades',
  templateUrl: './formulario-unidades.component.html',
  styleUrls: ['./formulario-unidades.component.scss'],
})
export class FormularioUnidadesComponent implements OnInit {
  opcionesEstadoUnidades: { label: string; value: boolean }[] = [
    { label: 'Activo', value: true },
    { label: 'Inactivo', value: false },
  ];

  public title?: string;
  data: UnidadesResponse | undefined;
  templateAdd: boolean = false;
  difArraySubunidades: boolean = false;

  fb = inject(FormBuilder);
  config = inject(DynamicDialogConfig);
  unidadesService = inject(UnidadesService);
  ref = inject(DynamicDialogRef);

  form = this.fb.group({
    codigo: this.fb.control<string>('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(12),
    ]),
    nombre: this.fb.control<string>('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
    ]),
    estado: this.fb.control<boolean>(true, [Validators.required]),
    subunidades: this.fb.array<SubunidadResponse[]>([]),
  });

  get subunidades() {
    return (this.form.get('subunidades') as FormArray) || [];
  }

  ngOnInit(): void {
    if (!this.config.data) return;
    if (this.config.data.codigo == 'new') {
      console.log('new');
    } else {
      let codigo = this.config.data.codigo;
      this.unidadesService
        .getUnidadesById(codigo)
        .subscribe((unidades) => this.addDataForm(unidades));
    }
  }
  addNewSubunidad() {
    const subunidadForm = this.fb.group({
      codigo: [''],
      nombre: [''],
    });

    this.subunidades.push(subunidadForm);
  }

  deleteSubunidad(subunidadIndex: number) {
    this.subunidades.removeAt(subunidadIndex);
  }

  addDataForm(data: UnidadesResponse) {
    if (!data) return;
    this.form.controls['codigo'].disable();
    this.form.patchValue({
      codigo: data.codigo?.toUpperCase(),
      nombre: data.nombre.toUpperCase(),
      estado: data.estado,
      subunidades: data.subunidades,
    });

    // Limpiar las subunidades previas del FormArray

    this.subunidades.clear();

    // Iterar sobre la lista de subunidades y agregar cada una al FormArray

    data.subunidades.forEach((subunidad: SubunidadResponse) => {
      const subunidadFormGroup = this.fb.group({
        codigo: [subunidad.codigo],
        nombre: [subunidad.nombre],
      });
      this.subunidades.push(subunidadFormGroup);
      subunidadFormGroup.controls['codigo'].disable();
    });

    this.data = data;
  }

  submit() {
    console.log('pristine: ', this.form.pristine);
    console.log('touched: ', this.form.touched);
    if (this.form.invalid) return;

    const values = this.form.getRawValue();
    const UnidadesForm: UnidadesResponse = {
      codigo: values.codigo!.toUpperCase(),
      nombre: values.nombre!.toUpperCase(),
      estado: values.estado!,
      subunidades: values.subunidades! as SubunidadResponse[],
    };
    if (this.hasDuplicateSubunidades()) {
      console.log('hay duplicados');
    }

    if (this.data?.codigo) {
      if (this.data?.subunidades.length != UnidadesForm.subunidades.length) {
        this.difArraySubunidades = true;
      }
      if (
        (!this.form.pristine && this.form.touched) ||
        this.difArraySubunidades
      ) {
        this.unidadesService
          .updateUnidad(UnidadesForm, this.data!.codigo!)
          .subscribe((res) => this.ref.close());
      }
    } else {
      this.unidadesService
        .addUnidades(UnidadesForm)
        .subscribe((res) => this.ref.close(res));
    }
  }
  hasDuplicateSubunidades(): boolean {
    const subunidadCodes = new Set<string>();
    for (const subunidad of this.subunidades.controls) {
      const codigo = subunidad.get('codigo')?.value;
      if (subunidadCodes.has(codigo)) {
        return true;
      }
      subunidadCodes.add(codigo);
    }
    return false;
  }

  cancel() {
    this.ref.close();
  }

  toggleSubunidades() {
    this.templateAdd = !this.templateAdd;
  }
}
