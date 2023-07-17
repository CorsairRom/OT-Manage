import { Component, Input, OnInit, inject } from '@angular/core';
import { UnidadesResponse } from '../../interfaces/unidades.interface';
import { FormBuilder } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ServicioService } from '../../../servicios/services/servicio.service';

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
  servicioService = inject(ServicioService)
  ref = inject(DynamicDialogRef)


  ngOnInit(): void {
    this.data = this.config.data.codigo
    console.log(this.data);
  }

}
