import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ClienteResponse } from '../../interfaces/clientes.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-detalle-cliente-page',
  templateUrl: './detalle-cliente-page.component.html',
  styleUrls: ['./detalle-cliente-page.component.scss']
})
export class DetalleClientePageComponent implements OnInit{


  cliente?: ClienteResponse;

  activatedRoute = inject(ActivatedRoute);
  location = inject(Location);
  router = inject(Router);

  clienteService = inject(ClientesService)

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      map(param => Number(param.get('id'))),
      switchMap((id) => this.clienteService.getClienteById(id))
    ).subscribe(cliente => this.cliente = cliente)
  }
  handleActualizarEvent(cliente: ClienteResponse) {
    this.router.navigate(['clientes', cliente.id, 'actualizar'])
  }

  handleEliminarEvent(cliente: ClienteResponse) {
    alert('cliente: puesto en inactivo')
  }

}
