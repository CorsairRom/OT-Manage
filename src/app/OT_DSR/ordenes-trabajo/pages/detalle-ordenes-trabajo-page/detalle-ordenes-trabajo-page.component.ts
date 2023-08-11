import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  Location } from '@angular/common';
import { OtService } from '../../services/ot.service';
import { OTResponse } from '../../interfaces/ot.interface';
import { map, switchMap } from 'rxjs';
import { SeguimientoService } from '../../services/seguimiento.service';

@Component({
  selector: 'app-detalle-ordenes-trabajo-page',
  templateUrl: './detalle-ordenes-trabajo-page.component.html',
  styleUrls: ['./detalle-ordenes-trabajo-page.component.scss']
})
export class DetalleOrdenesTrabajoPageComponent implements OnInit {

  OT?:OTResponse;

  activatedRoute = inject(ActivatedRoute);
  location = inject(Location);
  router = inject(Router);

  otService = inject(OtService)
  seguimientoServices = inject(SeguimientoService)

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      map(param => Number(param.get('id'))),
      switchMap((id) => this.otService.getOTById(id))
    ).subscribe(ot =>{
      this.OT = ot;
      console.log(ot);
    });
  };

}
