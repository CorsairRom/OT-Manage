import { NgModule } from '@angular/core';
import { FormularioClienteComponent } from './formulario-cliente.component';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from 'src/app/OT_DSR/prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UbicacionFormModule } from 'src/app/shared/components/ubicacion-form/ubicacion-form.module';





@NgModule({
  declarations: [FormularioClienteComponent],
  imports: [
    CommonModule,
    PrimeNGModule,
    ReactiveFormsModule,
    FormsModule,
    UbicacionFormModule
  ],
  exports: [FormularioClienteComponent],
})
export class FormularioClienteModule { }
