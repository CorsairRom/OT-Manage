import { Component, OnInit } from '@angular/core';
import { ClienteRES } from '../../interfaces/clientes.interface';
import { ClientesService } from '../../services/clientes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado-clientes-page',
  templateUrl: './listado-clientes-page.component.html',
  styleUrls: ['./listado-clientes-page.component.scss']
})
export class ListadoClientesPageComponent implements OnInit{
  clientes$: ClienteRES[] = [];
  private subscription?: Subscription;

  constructor( private clienteService:ClientesService) { }

  ngOnInit() {
    // Suscribirse a los cambios en los servicios
    this.subscription = this.clienteService.clientes$.subscribe(clientes => {
      this.clientes$ = clientes;
    });
    // Obtener los servicios iniciales
    this.clienteService.getClientes().subscribe(clientes => {
      this.clientes$ = clientes;
    });
  }
  ngOnDestroy() {
    // Asegurarse de cancelar la suscripción al destruir el componente
    this.subscription?.unsubscribe();
  }

}
