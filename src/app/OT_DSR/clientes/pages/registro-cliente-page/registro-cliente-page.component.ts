import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { ClientesService } from '../../services/clientes.service';
import { ClienteForm } from '../../interfaces/clientes.interface';

@Component({
  selector: 'app-registro-cliente-page',
  templateUrl: './registro-cliente-page.component.html',
  styleUrls: ['./registro-cliente-page.component.scss']
})
export class RegistroClientePageComponent {
  router = inject(Router)
  location = inject(Location)
  clienteService = inject(ClientesService)

  submit(clienteForm:ClienteForm){
    this.clienteService.addCliente(clienteForm).subscribe((res)=> this.router.navigate([`clientes/${res.id}/detalle`]))
  }

  cancel() {
    this.location.back();
  }
}
