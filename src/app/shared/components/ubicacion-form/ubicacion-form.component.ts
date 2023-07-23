import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { switchMap } from 'rxjs';
import { Comuna, Region } from 'src/app/OT_DSR/core/models/ubicaciones.model';
import { UbicacionService } from 'src/app/OT_DSR/core/services/ubicacion.service';

@Component({
  selector: 'app-ubicacion-form',
  templateUrl: './ubicacion-form.component.html',
  styleUrls: ['./ubicacion-form.component.scss']
})
export class UbicacionFormComponent implements OnInit {

  @Input() initialComunaId?: number | null;
  @Output() selectedComunaIdEvent = new EventEmitter<number | null>();

  ubicacionService = inject(UbicacionService);

  comunaActual: Comuna | null = null;
  regionActual: Region | null = null;
  regiones: Region[] = [];
  comunas: Comuna[] = [];

  ngOnInit(): void {
    this.ubicacionService.getRegiones().subscribe(regiones => this.regiones = regiones)
    if(this.initialComunaId) {

      this.ubicacionService.getComunaById(this.initialComunaId).pipe(
        switchMap((comuna) => {
          this.regionActual = this.regiones.find(r => r.id === comuna.reg_id.id)!
          return this.ubicacionService.getComunasByRegion(comuna.reg_id.id)
        })
      ).subscribe(comunas => {
        this.comunas = comunas;
        this.comunaActual = comunas.find(c => c.id === this.initialComunaId)!
      })
    }
  }

  handleRegionChanges(event: any) {
    const region  = event.value as Region;
    this.regionActual = region;
    this.comunaActual = null;
    this.ubicacionService.getComunasByRegion(region.id).subscribe(comunas => this.comunas = comunas)
    this.selectedComunaIdEvent.emit(null)
  }

  handleComunaChanges(event: any) {
    const comuna = event.value as Comuna;
    this.selectedComunaIdEvent.emit(comuna.id)
  }

}
