import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
import { Message } from 'primeng/api';

import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ButtonModule,
        InputTextModule,
        MessagesModule,
        PasswordModule,
    ],
    templateUrl: './login.component.html',
    styles: [
        `
            :host ::ng-deep .pi-eye,
            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }

            .page {
                display: grid;
                place-items: center;
                height: 100vh;
                background-color: grey;
            }

            .form {
                display: flex;
                flex-direction: column;
                width: 100%;
                gap: 8px;
                border-radius: 8px;
                padding: 32px;
                max-width: 400px;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                background-color: white;
            }
        `,
    ],
})
export class LoginComponent {
    authService = inject(AuthService);
    router = inject(Router);
    fb = inject(FormBuilder);

    messages: Message[] = [];
    loading = false;

    form = this.fb.nonNullable.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
    });
    login() {
        if (this.form.invalid) return;
        this.loading = true;
        const { username, password } = this.form.getRawValue();
        this.authService
            .login(username, password)
            .pipe(
                finalize(() => {
                    this.loading = false;
                    this.form.reset();
                })
            )
            .subscribe({
                next: (user) => {
                    if(user.usuario.is_superuser) {
                        this.router.navigate(['dashboard'], {replaceUrl: true});
                    } else if (user.usuario.is_staff) {
                        this.router.navigate(['dashboard'], {replaceUrl: true});
                    } else {
                        this.router.navigate(['empty'], {replaceUrl: true});
                    }
                },
                error: (err) => {
                    this.messages = [
                        {
                            severity: 'error',
                            summary: 'Error',
                            detail: err.error.error,
                        },
                    ];
                },
            });
    }
}
