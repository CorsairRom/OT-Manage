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
            routerLink: ['/ordenes-trabajo/listado'],
        }

        // const facturas = {
        //     label: 'Facturas',
        //     icon: 'bi bi-receipt',
        //     routerLink: ['/facturas/listado'],
        // }

        // const catalogo = {
        //     label: 'Catálogo',
        //     icon: 'bi bi-archive',
        //     items:[
        //       {
        //         label: 'Productos',
        //         icon: 'bi bi-upc-scan',
        //         routerLink: ['catalogo/productos/listado']
        //       },
        //       {
        //         label: 'Servicios',
        //         icon: 'bi bi-clipboard-minus',
        //         routerLink: ['catalogo/servicios/listado']
        //       },
        //       {
        //         label: 'Unidades',
        //         icon: 'bi bi-box-seam',
        //         routerLink: ['catalogo/unidades/listado']
        //       }
        //     ]

        // }

        // const fabricantes = {
        //     label: 'Fabricantes',
        //     icon: 'bi bi-briefcase',
        //     routerLink: ['/fabricantes/listado'],
        // }

        const clientes = {
            label: 'Clientes',
            icon: 'bi bi-person-gear',
            routerLink: ['/clientes/listado'],
        }

        const reportes = {
            label: 'Reportes',
            icon: 'bi bi-clipboard2-pulse',
            items:[
              {
                label: 'Ordenes de trabajo',
                icon: 'bi bi-clipboard-check',
                routerLink: ['reportes/reporte-ot/listado']
              }
            ]

        }

        // const configuracion = {
        //   label: 'Configuración',
        //   icon: 'bi bi-gear',
        //   routerLink: ['/configuraciones/profile'],
        // }

        const administrar = {
          label: 'Administrar accesos',
          icon: 'bi bi-pc-display',
          items:[
            {
              label: 'Usuarios',
              icon: 'bi bi-person',
              routerLink: ['administrar-accesos/usuarios/listado']
            },
            // {
            //   label: 'Grupos de usuarios',
            //   icon: 'bi bi-people',
            //   routerLink: ['administrar-accesos/Grupo-usuarios/listado']
            // },
          ]
        }


        if(user.usuario.is_superuser) {
            return [
                {
                    label: 'Administracion',
                    items: [dashboard, ot, clientes, reportes]
                },
                {
                    label: 'Seguridad',
                    items: [administrar]
                }
            ]
        }
        if (user.usuario.is_staff) {
            return [
                {
                    label: 'Administracion',
                    items: [dashboard, ot, clientes, reportes]
                },
            ]
        } else {
            return []
        }

    }

}
