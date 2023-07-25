import { Component, OnInit, inject, AfterViewInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ClienteRES } from '../../interfaces/clientes.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';
import { Subscription, map, switchMap } from 'rxjs';
import { SucursalesResponse } from '../../interfaces/sucursal.interface';
import { SucursalesService } from '../../services/sucursales.service';

@Component({
  selector: 'app-detalle-cliente-page',
  templateUrl: './detalle-cliente-page.component.html',
  styleUrls: ['./detalle-cliente-page.component.scss']
})
export class DetalleClientePageComponent implements OnInit{

  cliente?: ClienteRES;
  sucursales$: SucursalesResponse[] = [];
  private subscription?: Subscription;

  activatedRoute = inject(ActivatedRoute);
  location = inject(Location);
  router = inject(Router);

  clienteService = inject(ClientesService)
  sucursalesService = inject(SucursalesService)

  ngOnInit(){
    this.activatedRoute.paramMap.pipe(
      map(param => Number(param.get('id'))),
      switchMap((id) => this.clienteService.getClienteById(id))
    ).subscribe(cliente =>{
      this.cliente = cliente;
      this.suscribeSucursales(cliente.id);
    })
  }


  suscribeSucursales(id: number) {
    // Suscribirse a los cambios en los servicios
    this.subscription = this.sucursalesService.sucursales$.subscribe(sucursales => {

      this.sucursales$ = sucursales;
    });
    // Obtener los servicios iniciales
    this.sucursalesService.getSucursalByClienteID(id).subscribe(sucursales => {
      this.sucursales$ = sucursales;
    });
  }

  handleActualizarEvent(cliente: ClienteRES) {
    this.router.navigate(['clientes', cliente.id, 'actualizar'])
  }

  handleEliminarEvent(cliente: ClienteRES) {
    alert('cliente: puesto en inactivo')
  }
  ngOnDestroy() {
    // Asegurarse de cancelar la suscripción al destruir el componente
    this.subscription?.unsubscribe();
  }

}
