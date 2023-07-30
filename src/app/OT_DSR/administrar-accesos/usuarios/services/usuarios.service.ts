import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MensajeService } from 'src/app/OT_DSR/core/services/message.service';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { UsuariosResponse } from '../interfaces/usuario.interface';

@Injectable({providedIn: 'root'})
export class UsuariosService {
  private http = inject(HttpClient)
  private messageService = inject(MensajeService);

  private apiUrl = `${ environment.apiUrl }/api/usuario`

  private usuarioSubject = new BehaviorSubject<UsuariosResponse[]>([]);
  usuarios$ = this.usuarioSubject.asObservable();

  private handleError(error: HttpErrorResponse) {
    const msg = JSON.stringify(error.error);
    if (error.status == 400 || error.status == 404) {
        const errores = Object.entries(error.error).map((msg) =>`${msg[0].toUpperCase()}: ${msg[1]}`);
        this.messageService.addMessage({
            details: errores,
            role: 'error',
        });
    }
    return throwError(() => new Error(msg));
  };

  getUsuarios(query: {} = {}) {
    return this.http.get<UsuariosResponse[]>(`${this.apiUrl}/`, {params: query}).pipe(
      tap(usuarios => {
        // Actualizar los datos del servicio en el BehaviorSubject
        this.usuarioSubject.next(usuarios);
      }),
      catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  };



}
