import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, finalize, map, shareReplay, switchMap, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Auth } from '../models/auth.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private userKey = 'access_token';
    private http = inject(HttpClient);
    private router = inject(Router);

    private userSubject = new BehaviorSubject<Auth | null>(null);
    user$ = this.userSubject.asObservable().pipe(shareReplay(1))

    constructor(){
        this.loadUserFromStorage()
    }

    getCurrentUser() {
        return this.userSubject.value;
    }

    login(username: string, password: string) {
        return this.http
            .post<Auth>(`${environment.apiUrl}/login/`, {
                username: username,
                password: password,
            })
            .pipe(
                tap((auth) => {
                    this.setUser(auth);
                })
            );
    }

    setUser(auth: Auth) {
        this.userSubject.next(auth);
        localStorage.setItem(this.userKey, JSON.stringify(auth));
    }

    loadUserFromStorage() {
        const data = localStorage.getItem(this.userKey);
        if (data) {
            this.userSubject.next(JSON.parse(data) as Auth);
        } else {
            this.userSubject.next(null);
        }
    }

    logout() {
        return  this.http.post(`${environment.apiUrl}/logout/?token=${this.getCurrentUser()?.token}`,{}).pipe(
            finalize(() => {
                this.clearSession();
                this.router.navigate(['auth/login'], { replaceUrl: true });
            })
        )
    }

    clearSession() {
        localStorage.removeItem(this.userKey);
        this.userSubject.next(null);
    }

    isAuthenticated() {
        return this.user$.pipe(
            map(user => {
                if(!user) { return false }
                const {token, usuario} = user;
                if(!token) {return false}
                if(!usuario) { return false; }
                return usuario.id ? true: false;
            })
        )
    }

    isSuperuser() {
        return this.user$.pipe(map(user => user?.usuario.is_superuser === true))
    }

    isStaff() {
        return this.user$.pipe(map(user => user?.usuario.is_staff === true))
    }
}
