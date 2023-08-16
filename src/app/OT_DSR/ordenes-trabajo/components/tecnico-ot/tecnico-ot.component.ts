import { Component, Input, OnInit, Pipe, inject } from '@angular/core';
import { UsuariosResponse } from 'src/app/OT_DSR/administrar-accesos/usuarios/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/OT_DSR/administrar-accesos/usuarios/services/usuarios.service';
import { map } from 'rxjs';

@Component({
  selector: 'tecnico-ot',
  templateUrl: './tecnico-ot.component.html',
  styles: [
  ]
})
export class TecnicoOTComponent implements OnInit {

  private usuarioService = inject(UsuariosService);

  tecnicos?: UsuariosResponse[];

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(
     u => this.tecnicos = u
    )
  }
}
