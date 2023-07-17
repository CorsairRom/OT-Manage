import { Component, OnInit } from '@angular/core';
import { UnidadesResponse } from '../../interfaces/unidades.interface';
import { Subscription } from 'rxjs';
import { UnidadesService } from '../../services/unidades.service';

@Component({
  selector: 'app-listado-unidades-page',
  templateUrl: './listado-unidades-page.component.html',
  styleUrls: ['./listado-unidades-page.component.scss']
})
export class ListadoUnidadesPageComponent implements OnInit {

  unidades$: UnidadesResponse[] = [];
  private subscription?: Subscription;

  constructor(
    private unidadesServices: UnidadesService
  ){}


  ngOnInit() {
    // Suscribirse a los cambios en los servicios
    this.subscription = this.unidadesServices.unidades$.subscribe(unidades => {
      this.unidades$ = unidades;
    });

    // this.unidadesServices.getUnidades().subscribe(data => console.log(data))

    // Obtener los servicios iniciales
    this.unidadesServices.getUnidades().subscribe(unidades => {
      this.unidades$ = unidades;
    });
  }

  ngOnDestroy() {
    // Asegurarse de cancelar la suscripción al destruir el componente
    this.subscription?.unsubscribe();
  }

}
