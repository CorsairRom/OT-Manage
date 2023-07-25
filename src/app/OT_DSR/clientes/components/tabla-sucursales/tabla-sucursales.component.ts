import { Component, EventEmitter, Input, Output, inject, OnInit, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { SucursalesForm, SucursalesResponse } from '../../interfaces/sucursal.interface';
import { SucursalesService } from '../../services/sucursales.service';
import { ClienteRES } from '../../interfaces/clientes.interface';
import { ClientesService } from '../../services/clientes.service';


@Component({
  selector: 'tabla-sucursales',
  templateUrl: './tabla-sucursales.component.html',
  styles: [
  ]
})
export class TablaSucursalesComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {

  }

  @Input() sucursales: SucursalesResponse[] = [];
  @Input() cliente?: ClienteRES;

  sucursal?: SucursalesResponse;
  formSucursalToggle: boolean = false; //cambiar
  sucursalForm?:SucursalesForm;



  sucursalesService= inject(SucursalesService)
  clienteServices = inject(ClientesService)
  ngOnInit(): void {

  }


  toggleFormSucursal(){

    this.formSucursalToggle = !this.formSucursalToggle;
  }

  submitEvent(sucursarForm: SucursalesForm){
    console.log(sucursarForm);
  }
}
