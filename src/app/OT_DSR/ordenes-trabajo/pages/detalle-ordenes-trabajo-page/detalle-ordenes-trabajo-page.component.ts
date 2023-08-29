import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  Location } from '@angular/common';
import { OtService } from '../../services/ot.service';
import { OTResponse } from '../../interfaces/ot.interface';
import { map, switchMap } from 'rxjs';
import { SeguimientoService } from '../../services/seguimiento.service';
import { ReporteService } from '../../services/reporte.service';

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
  reporteService = inject(ReporteService)

  otService = inject(OtService)
  seguimientoServices = inject(SeguimientoService)

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      map(param => Number(param.get('id'))),
      switchMap((id) => this.otService.getOTById(id))
    ).subscribe(ot =>{
      this.OT = ot;
    });
  };

  generarReporte(idOT: number){
    this.reporteService.getReporteOT({idOT: idOT}).subscribe(
      response => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const pdfUrl = URL.createObjectURL(blob);
        window.open(pdfUrl);
    })

  }

}
