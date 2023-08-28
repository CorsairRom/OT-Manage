import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MensajeService } from '../../core/services/message.service';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { ClienteForm, ClienteRES } from '../interfaces/clientes.interface';

@Injectable({providedIn: 'root'})
export class ClientesService {
  private http = inject(HttpClient)
  private messageService = inject(MensajeService);
  private apiUrl = `${ environment.apiUrl }/api/cliente`

  private clientesSubject = new BehaviorSubject<ClienteRES[]>([]);
  clientes$ = this.clientesSubject.asObservable();

  newClienteSubject = new BehaviorSubject<ClienteRES | null>(null);
  newCliente$ = this.newClienteSubject.asObservable();

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

  // setNuevoClienteId(id: number): void {
  //   this.nuevoClienteIdSubject.next(id);
  // }

  changeIdCliente(newCliente: ClienteRES) {
    this.newClienteSubject.next(newCliente);
  }

  getClientes(query: {} = {}) {

    return this.http.get<ClienteRES[]>(`${this.apiUrl}/`, {params: query}).pipe(
      tap(clientes => {
        // Actualizar los datos del servicio en el BehaviorSubject

        this.clientesSubject.next(clientes);
      }),
      catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  };

  getClienteById(id: number):Observable<ClienteRES> {
    return this.http.get<ClienteRES>(`${this.apiUrl}/${id}/`);

  }

  addCliente(ClienteForm: ClienteForm): Observable<ClienteRES>  {
    return this.http.post<ClienteRES>(`${this.apiUrl}/`, ClienteForm).pipe(
      tap((newClient) => {
          this.messageService.addMessage({
              details: ['Cliente registrado exitosamente!'],
              role: 'success'
          })
          this.clientesSubject.next([ newClient, ...this.clientesSubject.value,]);
      }),
      catchError((err: HttpErrorResponse) => this.handleError(err))
  )
  };

  updateCliente(ClienteForm: ClienteForm){
    return this.http.put<ClienteRES>(`${this.apiUrl}/${ClienteForm.id!}/`, ClienteForm);
  };

}
