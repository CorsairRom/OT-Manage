import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ClientesService } from '../../services/clientes.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ClienteForm } from '../../interfaces/clientes.interface';

@Component({
  selector: 'app-actualizar-cliente-page',
  templateUrl: './actualizar-cliente-page.component.html',
  styleUrls: ['./actualizar-cliente-page.component.scss']
})
export class ActualizarClientePageComponent {

  clienteService = inject(ClientesService)
  activateRoute = inject(ActivatedRoute)
  location = inject(Location)


  cliente$ = this.activateRoute.paramMap.pipe(
    map(params => Number(params.get('id'))),
    switchMap(id => this.clienteService.getClienteById(id))
  )


  submit(clienteForm: ClienteForm) {
    this.clienteService.updateCliente(clienteForm)
      .pipe()
      .subscribe(() => this.location.back())
  }

  cancel() {
    this.location.back();
  }

}
