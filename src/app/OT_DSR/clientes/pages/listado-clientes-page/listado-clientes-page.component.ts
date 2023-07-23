import { Component } from '@angular/core';
import { ClienteResponse } from '../../interfaces/clientes.interface';

@Component({
  selector: 'app-listado-clientes-page',
  templateUrl: './listado-clientes-page.component.html',
  styleUrls: ['./listado-clientes-page.component.scss']
})
export class ListadoClientesPageComponent {
  clientes$: ClienteResponse[] = [];
}
