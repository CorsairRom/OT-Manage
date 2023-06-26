import { inject } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { AuthService } from '../OT_DSR/core/services/auth.service';
import { Subscription, filter, map } from 'rxjs';
import { Auth } from '../OT_DSR/core/models/auth.model';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent {

    layoutService = inject(LayoutService)
    authService = inject(AuthService)

    userSub?: Subscription
    model$ = this.authService.user$.pipe(
        filter(user =>  user ? true: false),
        map(user => this.getMenu(user!))
    )


    getMenu(user: Auth) {
        const dashboard = {
            label: 'Dashboard',
            icon: 'fa-solid fa-chart-line',
            routerLink: ['/dashboard'],
        }

        const ot = {
            label: 'Ordenes de Trabajo',
            icon: 'fa-solid fa-paste',
            routerLink: ['/trabajadores/listado'],
        }

        const facturas = {
            label: 'Facturas',
            icon: 'fa-solid fa-file',
            routerLink: ['/propiedades/listado'],
        }

        const catalogo = {
            label: 'Catálogo',//Productos-servicios-unidades
            icon: 'fa-solid fa-list',
            routerLink: ['/propietarios/listado'],
        }

        const fabricantes = {
            label: 'Fabricantes',
            icon: 'fa-solid fa-industry',
            routerLink: ['/arrendatarios/listado'],
        }

        const clientes = {
            label: 'Clientes',
            icon: 'fa-solid fa-users',
            routerLink: ['/arriendos/listado'],
        }

        const reportes = {
            label: 'Reportes', //Ordenes de trabajo
            icon: 'fa-solid fa-chevron-down',
            routerLink: ['/usuarios/listado'],
        }

        const configuracion = {
          label: 'Configuración', //Ordenes de trabajo
          icon: 'fa-solid fa-gears',
          routerLink: ['/usuarios/listado'],
        }

        const administrar = {
          label: 'Administrar accesos', //Grupos de usuarios - usuarios
          icon: 'fa-solid fa-eye',
          routerLink: ['/usuarios/listado'],
        }


        if(user.usuario.is_superuser) {
            return [
                {
                    label: 'Administracion',
                    items: [dashboard, ot, facturas, catalogo, fabricantes, clientes, reportes]
                },
                {
                    label: 'Seguridad',
                    items: [administrar, configuracion]
                }
            ]
        }
        if (user.usuario.is_staff) {
            return [
                {
                    label: 'Administracion',
                    items: [dashboard, ot, facturas, catalogo, fabricantes, clientes, reportes]
                },
            ]
        } else {
            return []
        }

    }

}
