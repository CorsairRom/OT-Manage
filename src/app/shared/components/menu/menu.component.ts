import { inject } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../../service/app.layout.service';

import { AuthService } from '../../../OT_DSR/core/services/auth.service';
import { Subscription, filter, map } from 'rxjs';
import { Auth } from '../../../OT_DSR/core/models/auth.model';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
})
export class MenuComponent {

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
            icon: 'bi bi-graph-up-arrow',
            routerLink: ['/dashboard']
        }

        const ot = {
            label: 'Ordenes de Trabajo',
            icon: 'bi bi-wrench-adjustable-circle',
            routerLink: ['/trabajadores/listado'],
        }

        const facturas = {
            label: 'Facturas',
            icon: 'bi bi-receipt',
            routerLink: ['/propiedades/listado'],
        }

        const catalogo = {
            label: 'Catálogo',
            icon: 'bi bi-archive',
            items:[
              {
                label: 'Productos',
                icon: 'bi bi-upc-scan',
                routerLink: ['/productos/listado']
              },
              {
                label: 'Servicios',
                icon: 'bi bi-clipboard-minus',
                routerLink: ['/servicios/listado']
              },
              {
                label: 'Unidades',
                icon: 'bi bi-box-seam',
                routerLink: ['/unidades/listado']
              }
            ]

        }

        const fabricantes = {
            label: 'Fabricantes',
            icon: 'bi bi-briefcase',
            routerLink: ['/arrendatarios/listado'],
        }

        const clientes = {
            label: 'Clientes',
            icon: 'bi bi-person-gear',
            routerLink: ['/arriendos/listado'],
        }

        const reportes = {
            label: 'Reportes',
            icon: 'bi bi-clipboard2-pulse',
            items:[
              {
                label: 'Ordenes de trabajo',
                icon: 'bi bi-clipboard-check',
                routerLink: ['/ot/listado']
              }
            ]

        }

        const configuracion = {
          label: 'Configuración',
          icon: 'bi bi-gear',
          routerLink: ['/usuarios/listado'],
        }

        const administrar = {
          label: 'Administrar accesos',
          icon: 'bi bi-pc-display',
          items:[
            {
              label: 'Usuarios',
              icon: 'bi bi-person',
              routerLink: ['/usuarios/listado']
            },
            {
              label: 'Grupos de usuarios',
              icon: 'bi bi-people',
              routerLink: ['/grupo/listado']
            },
          ]
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
