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
            icon: 'pi pi-fw pi-home',
            routerLink: ['/dashboard'],
        }
        const trabajadores = {
            label: 'Trabajadores',
            icon: 'pi pi-fw pi-user',
            routerLink: ['/trabajadores/listado'],
        }

        const propiedades = {
            label: 'Propiedades',
            icon: 'pi pi-fw pi-building',
            routerLink: ['/propiedades/listado'],
        }

        const propietarios = {
            label: 'Propietarios',
            icon: 'pi pi-fw pi-id-card',
            routerLink: ['/propietarios/listado'],
        }

        const arrendatarios = {
            label: 'Arrendatarios',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/arrendatarios/listado'],
        }

        const arriendos = {
            label: 'Arriendos',
            icon: 'pi pi-fw pi-money-bill',
            routerLink: ['/arriendos/listado'],
        }

        const usuarios = {
            label: 'Usuarios',
            icon: 'pi pi-fw pi-lock',
            routerLink: ['/usuarios/listado'],
        }


        if(user.usuario.is_superuser) {
            return [
                {
                    label: 'Administracion',
                    items: [dashboard, trabajadores, propiedades, propietarios, arrendatarios, arriendos]
                },
                {
                    label: 'Seguridad',
                    items: [usuarios]
                }
            ]
        }
        if (user.usuario.is_staff) {
            return [
                {
                    label: 'Administracion',
                    items: [dashboard, trabajadores, propiedades, propietarios, arrendatarios, arriendos]
                },
            ]
        } else {
            return []
        }

    }

}
