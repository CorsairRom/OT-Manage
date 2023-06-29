import { RouterModule } from '@angular/router';
import { NgModule, inject } from '@angular/core';
import { AppLayoutComponent } from './shared/app.layout.component';
import { NotFoundComponent } from './OT_DSR/pages/not-found/not-found.component';
import { authGuard } from './OT_DSR/core/guards/auth.guard';
import { AuthService } from './OT_DSR/core/services/auth.service';



@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: AppLayoutComponent,
                    canActivate: [authGuard],
                    children: [
                        {
                            path: 'dashboard',
                            canActivate: [
                                () => inject(AuthService).isStaff()
                            ],
                            loadChildren: () => import( './OT_DSR/dashboard/dashboard.module' ).then((m) => m.DashboardModule),
                        },
                        {
                            path: 'ordenes-trabajo',
                            loadChildren: () => import( '../app/OT_DSR/ordenes-trabajo/ordenes-trabajo.module').then((m) => m.OrdenesTrabajoModule),
                        },
                        {
                            path: 'facturas',
                            loadChildren: () => import( '../app/OT_DSR/facturas/facturas.module').then((m) => m.FacturasModule),
                        },
                        {
                            path: 'catalogo',
                            loadChildren: () => import( '../app/OT_DSR/catalogo/catalogo.module').then((m) => m.CatalogoModule),
                        },
                        {
                            path: 'fabricantes',
                            loadChildren: () => import( '../app/OT_DSR/fabricantes/fabricantes.module').then((m) => m.FabricantesModule),
                        },
                        {
                            path: 'clientes',
                            loadChildren: () => import( '../app/OT_DSR/clientes/clientes.module').then((m) => m.ClientesModule),
                        },
                        {
                            path: 'reportes',
                            loadChildren: () => import( '../app/OT_DSR/reportes/reportes.module').then((m) => m.ReportesModule),
                        },
                        {
                            path: 'administrar-accesos',
                            loadChildren: () => import( '../app/OT_DSR/administrar-accesos/administrar-accesos.module').then((m) => m.AdministrarAccesosModule),
                        },
                        {
                            path: 'configuraciones',
                            loadChildren: () => import( '../app/OT_DSR/configuracion/configuracion.module').then((m) => m.ConfiguracionModule),
                        },
                        {
                            path: 'empty',
                            loadComponent: () => import('./OT_DSR/pages/empty/empty.component').then(m => m.EmptyComponent)
                        },
                    ],
                },
                {
                    path: 'auth',
                    children: [
                        {
                            path: 'login',
                            loadComponent: () => import( './OT_DSR/pages/login/login.component' ).then((m) => m.LoginComponent),
                        },
                    ],
                },
                { path: 'notfound', component: NotFoundComponent },
                { path: '**', redirectTo: '/notfound' },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
