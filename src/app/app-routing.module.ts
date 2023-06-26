import { RouterModule } from '@angular/router';
import { NgModule, inject } from '@angular/core';
import { AppLayoutComponent } from './layout/app.layout.component';
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
                        // {
                        //     path: 'usuarios',
                        //     canActivate: [
                        //         () => inject(AuthService).isSuperuser()
                        //     ],
                        //     loadChildren: () => import( './propiedades-alegria/usuarios/usuarios.routes').then((m) => m.USUARIO_ROUTES),
                        // },
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
