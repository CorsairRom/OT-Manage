import { Component, EventEmitter, Input, Output, inject, OnInit, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { SucursalesForm, SucursalesResponse } from '../../interfaces/sucursal.interface';
import { SucursalesService } from '../../services/sucursales.service';


@Component({
  selector: 'tabla-sucursales',
  templateUrl: './tabla-sucursales.component.html',
  styles: [
  ]
})
export class TablaSucursalesComponent {


  @Input() sucursales: SucursalesResponse[] = [];
  @Input() clienteID?: number;

  sucursal?: SucursalesResponse;
  formSucursalToggle: boolean = true; //cambiar
  sucursalForm?:SucursalesForm;
  idCliente!:number;


  sucursalesService= inject(SucursalesService)



  toggleFormSucursal(Event:any){
    // console.log(this.sucursal);
    this.formSucursalToggle = !this.formSucursalToggle;
  }

  submitEvent(sucursarForm: SucursalesForm){
    console.log(sucursarForm);
  }
}
