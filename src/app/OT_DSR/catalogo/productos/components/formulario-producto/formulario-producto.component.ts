import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Producto, ProductosResponse, ProductoForm } from '../../interfaces/productos.model';
import { FormBuilder, Validators } from '@angular/forms';
import { FabricanteServices } from 'src/app/OT_DSR/fabricantes/services/fabricantes.service';
import { map, switchMap } from 'rxjs';
import { ProductosService } from '../../services/productos.service';
import { HttpHeaders } from '@angular/common/http';

interface fabricanteSelect{
  id: number;
  nombre: string;
}

@Component({
  selector: 'formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.scss']
})
export class FormularioProductoComponent implements OnInit {

  @Input() producto? : ProductosResponse

  @Output() submitEvent = new EventEmitter<ProductoForm>()
  @Output() cancelEvent = new EventEmitter<void>()

  opcionesEstadoProducto: {label: string; value: boolean}[] = [
    { label: 'Activo', value: true },
    { label: 'Inactivo', value: false },
  ]

  fabricantesNombres: fabricanteSelect[] = [];
  file:File | null = null;
  imagenSeleccionada!: string;

  fb = inject(FormBuilder)
  fabricantesServices = inject(FabricanteServices)
  productosServices = inject(ProductosService)



  ngOnInit(): void {
    this.fabricantesServices.getFabricantes().pipe(
      map(fabricantes => {
        this.fabricantesNombres = fabricantes.map(fabricante => ({ id: fabricante.id!, nombre: fabricante.nombre }));
        console.log(this.fabricantesNombres);
      })
    ).subscribe(result => {}, error => console.log(error));
  }



  form = this.fb.group({
    codigo: this.fb.control<string>('',[Validators.required, Validators.maxLength(12)] ),
    modelo: this.fb.control<string | null>(null,[Validators.maxLength(50)] ),
    nombre: this.fb.control<string>('', [Validators.required, Validators.maxLength(50)] ),
    nota: this.fb.control<string | null>(null, [Validators.maxLength(500)] ),//final textField
    precio: this.fb.control<number>(0, [Validators.required, Validators.min(0), Validators.max(999999999)] ),
    estado: this.fb.control<boolean>(true, [ Validators.required]),
    imagen: this.fb.control<File | null>(null),
    stock: this.fb.control<number>(0, [Validators.required, Validators.min(1), Validators.max(999999)]),
    fabricante: this.fb.control<fabricanteSelect | null>(null, [Validators.required]),
  })

  //TODO: setear el estado del producto cuando se necesita modificar
  // onSubmit():void{
  //   console.log(this.form);
  //   if(this.form.invalid) return;

  //   const values = this.form.getRawValue();

  //   const productoForm: ProductoForm = {
  //     codigo: values.codigo!,
  //     modelo: values.modelo,
  //     nombre: values.modelo!,
  //     nota: values.nota,
  //     precio: values.precio!,
  //     estado: values.estado!,
  //     imagen: this.file,
  //     stock: values.stock!,
  //     fabricante: values.fabricante?.id!
  //   }


  //   console.log(values.imagen);
  //   console.log('Imagen: ',this.file);

  //   this.productosServices.addProducto(productoForm).subscribe(data=> console.log(data))
  //   // this.submitEvent.emit(productoForm);
  // }

  onSubmit(): void {
    console.log(this.form);
    if (this.form.invalid) return;

    const formData = new FormData();
    formData.append('codigo', this.form.value.codigo!);
    formData.append('modelo', this.form.value.modelo!);
    formData.append('nombre', this.form.value.nombre!);
    formData.append('nota', this.form.value.nota!);
    formData.append('precio', String(this.form.value.precio));
    formData.append('estado', String(this.form.value.estado));
    formData.append('stock', String(this.form.value.stock));
    formData.append('fabricante', this.form.value.fabricante?.id?.toString() || '');

    if (this.file) {
      formData.append('imagen', this.file);
    }

    console.log('Formulario:', this.form.value);
    console.log('Imagen:', this.file);
    console.log(formData);
    this.productosServices.addProducto(formData).subscribe(data => console.log(data));
    // this.submitEvent.emit(productoForm);
  }


  onFileSelect(event: any): void {
    const file = event.files[0];

    console.log(file);
    this.file = file;
    const reader = new FileReader();

    reader.onloadend = () => {
      this.form.patchValue({
        imagen: file ? file : reader.result
      });
      this.imagenSeleccionada = reader.result as string;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }


  cancel(){
    this.cancelEvent.emit();
  }

}
