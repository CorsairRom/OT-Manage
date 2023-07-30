import { Component, OnInit, inject } from '@angular/core';
import { UsuariosResponse } from '../../interfaces/usuario.interface';
import { Subscription } from 'rxjs';
import { UsuariosService } from '../../services/usuarios.service';


@Component({
  selector: 'app-listado-usuarios-page',
  templateUrl: './listado-usuarios-page.component.html',
  styleUrls: ['./listado-usuarios-page.component.scss']
})
export class ListadoUsuariosPageComponent implements OnInit {

  usuarios$: UsuariosResponse[] = [];
  private subscription?: Subscription;

  usuariosServices = inject(UsuariosService);

  ngOnInit(){
    this.subscription = this.usuariosServices.usuarios$.subscribe(usuarios => {
      this.usuarios$ = usuarios;
    });
    // Obtener los servicios iniciales
    this.usuariosServices.getUsuarios().subscribe(usuarios => {
      this.usuarios$ = usuarios;
    });
  };

  ngOnDestroy() {
    // Asegurarse de cancelar la suscripción al destruir el componente
    this.subscription?.unsubscribe();
  };

}
