import { Component,EventEmitter, Input, Output } from '@angular/core';
import { SucursalesResponse } from '../../interfaces/sucursal.interface';


@Component({
  selector: 'tabla-sucursales',
  templateUrl: './tabla-sucursales.component.html',
  styles: [
  ]
})
export class TablaSucursalesComponent {

  @Input() sucursales: SucursalesResponse[] = [];
  sucursalForm?: SucursalesResponse;
  formSucursal: boolean = true; //cambiar

  toggleFormSucursal(){
    this.formSucursal = !this.formSucursal;
  }
}
