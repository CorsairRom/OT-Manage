import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MensajeService } from '../../core/services/message.service';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { ClienteResponse } from '../interfaces/clientes.interface';

@Injectable({providedIn: 'root'})
export class ClientesService {
  private http = inject(HttpClient)
  private messageService = inject(MensajeService);
  private apiUrl = `${ environment.apiUrl }/api/cliente`

  private clientesSubject = new BehaviorSubject<ClienteResponse[]>([]);
  clientes$ = this.clientesSubject.asObservable();

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

  getClientes(query: {} = {}) {

    return this.http.get<ClienteResponse[]>(`${this.apiUrl}/`, {params: query}).pipe(
      tap(clientes => {
        // Actualizar los datos del servicio en el BehaviorSubject

        this.clientesSubject.next(clientes);
      }),
      catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  };

}
