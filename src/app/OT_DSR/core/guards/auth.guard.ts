import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs';

export function authGuard() {
    const router = inject(Router);
    const authService = inject(AuthService);

   return authService.isAuthenticated().pipe(
    tap(isAuth => {
        if(!isAuth) {
            router.navigate(['auth/login'], { replaceUrl: true });
        }           
    })
   )

}
