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
  dissableBtnRegistrar: boolean = false;



  sucursalesService= inject(SucursalesService)
  clienteServices = inject(ClientesService)
  ngOnInit(): void {

  }


  toggleFormSucursal(){
    this.formSucursalToggle = true;

    this.dissableBtnRegistrar= true;
  }

  submitEvent(sucursarForm: SucursalesForm){
    if(sucursarForm.id){
      this.updateEvent(sucursarForm)

      return;
    }
    this.sucursalesService.addSucursal(sucursarForm).subscribe()

  }

  updateEvent(sucursalForm: SucursalesForm){
    this.sucursalesService.updateSucursal(sucursalForm, sucursalForm.id!).subscribe()
  }

  cancelEvent(){

    this.sucursal = undefined;
    this.dissableBtnRegistrar = false;
    this.formSucursalToggle = false;
  }

  updateSucursal(sucursarl:SucursalesResponse){
    this.sucursal = sucursarl;

    this.toggleFormSucursal()
  }

  Delete(id: number){

    if(!id) return;
    this.sucursalesService.deleteSucursal(id).subscribe()
  }



}
