import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ClienteRES } from 'src/app/OT_DSR/clientes/interfaces/clientes.interface';
import { ClientesService } from 'src/app/OT_DSR/clientes/services/clientes.service';

@Component({
  selector: 'app-client-selector',
  templateUrl: './client-selector.component.html',
  styles: [
  ]
})
export class ClientSelectorComponent implements OnInit {


  @Input() initialClientId?: number | null;
  @Output() selectedClientIdEvent = new EventEmitter<number | null>();
  @Output() createClientEvent = new EventEmitter<boolean>();

  currentClient?: ClienteRES | null = null;
  clients$: ClienteRES[] = [];

  private clientService = inject(ClientesService);

  ngOnInit(): void {
    this.clientService.getClientes().subscribe();
    this.clientService.clientes$.subscribe(
      res => this.clients$ = res
    )

    if(this.initialClientId) {
      // this.clientService.getClienteById(this.initialClientId).subscribe(client => this.currentClient = client);
      this.clientService.clientes$.subscribe(res => {
        this.currentClient = res.find(c => c.id === this.initialClientId)
        console.log(this.currentClient);
        console.log(res);
      })
    }
  }

  handleClientChanges(event: any) {
    const client = event.value as ClienteRES;
    this.currentClient = client;
    this.selectedClientIdEvent.emit(client.id)
  }
  crearNuevoCliente(){
    this.createClientEvent.emit(true);
  }

}
