import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UbicacionFormComponent } from './ubicacion-form.component';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [UbicacionFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule
  ],
  exports:[UbicacionFormComponent]
})
export class UbicacionFormModule { }
