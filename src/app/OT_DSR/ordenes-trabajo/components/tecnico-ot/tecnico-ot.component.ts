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
  selectedTecnico?: UsuariosResponse;
  selectedSubrogante?: UsuariosResponse;
  tecnicos?: UsuariosResponse[];

  ngOnInit(): void {
    this.usuarioService.getUsuarios().pipe(
      map(user => user.filter(user => user.is_superuser===false)
    )
  ).subscribe(tec => this.tecnicos = tec)}

}
