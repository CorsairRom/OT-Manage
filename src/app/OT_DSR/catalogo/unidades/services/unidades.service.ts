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

    return this.http.get<UnidadesResponse[]>(`${this.apiUrlUnidades}/`, {params: query}).pipe(
      tap(unidades => {
        // Actualizar los datos del servicio en el BehaviorSubject

        this.unidadesSubject.next(unidades);
      }),
      catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  };

  getUnidadesById(codigo: string){
    return this.http.get<UnidadesResponse>(`${this.apiUrlUnidades}/${codigo}/`);
  }

  addUnidades(UnidesData: UnidadesResponse): Observable<UnidadesResponse>  {
    return this.http.post<UnidadesResponse>(`${this.apiUrlUnidades}/`, UnidesData).pipe(
      tap(() => {
          this.messageService.addMessage({
              details: ['Unidad registrado exitosamente!'],
              role: 'success'
          })
      }),
      catchError((err: HttpErrorResponse) => this.handleError(err))
  )
  }
  // updateUnidad(unidadesData: UnidadesResponse): Observable<UnidadesResponse>{
  //   return this.http.put<UnidadesResponse>(`${this.apiUrlUnidades}/`, unidadesData)
  // }
  updateUnidad(unidadesData: UnidadesResponse, codigo: string) {
    return this.http.patch<UnidadesResponse>(`${this.apiUrlUnidades}/${codigo}/`, unidadesData).pipe(
      tap((updatedUnidades: UnidadesResponse) => {
        this.messageService.addMessage({
          details: ['Servicio actualizado exitosamente!'],
          role: 'success'
        });

        // Actualizar los datos del servicio con el servicio actualizado
        const unidades = this.unidadesSubject.getValue();
        const unidadesIndex = unidades.findIndex(s => s.codigo === updatedUnidades.codigo);
        if (unidadesIndex !== -1) {
          unidades[unidadesIndex] = updatedUnidades;
          this.unidadesSubject.next(unidades);
        }
      }),
      catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  }

}
