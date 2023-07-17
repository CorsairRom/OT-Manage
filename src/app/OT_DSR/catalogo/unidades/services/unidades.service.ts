import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MensajeService } from 'src/app/OT_DSR/core/services/message.service';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { UnidadesResponse } from '../interfaces/unidades.interface';

@Injectable({ providedIn: 'root' })

export class UnidadesService {

  private http = inject(HttpClient)
  private messageService = inject(MensajeService);
  private apiUrlUnidades = `${ environment.apiUrl }/api/unidades`
  private apiUrlSubunidades = `${ environment.apiUrl }/api/subunidades`

  private unidadesSubject = new BehaviorSubject<UnidadesResponse[]>([]);
  unidades$ = this.unidadesSubject.asObservable();

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

  getUnidades(query: {} = {}) {
    console.log(this.apiUrlUnidades);
    return this.http.get<UnidadesResponse[]>(`${this.apiUrlUnidades}/`, {params: query}).pipe(
      tap(unidades => {
        // Actualizar los datos del servicio en el BehaviorSubject
        console.log(unidades);
        this.unidadesSubject.next(unidades);
      }),
      catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  };

  // addUnidades(UnidesData: UnidadesResponse): Observable<UnidadesResponse>  {
  //   return this.http.post<UnidadesResponse>(`${this.apiUrlUnidades}/`, UnidesData).pipe(
  //     tap(() => {
  //         this.messageService.addMessage({
  //             details: ['Servicio registrado exitosamente!'],
  //             role: 'success'
  //         })
  //     }),
  //     catchError((err: HttpErrorResponse) => this.handleError(err))
  // )
  // }

}
