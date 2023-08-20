import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MensajeService } from '../../core/services/message.service';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { OTForm, OTResponse } from '../interfaces/ot.interface';

@Injectable({
  providedIn: 'root'
})
export class OtService {
  private http = inject(HttpClient)
  private messageService = inject(MensajeService);
  private apiUrl = `${ environment.apiUrl }/api/OT`;

  private otSubject = new BehaviorSubject<OTResponse[]>([]);
  ot$ = this.otSubject.asObservable();

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

  getOT(){
    return this.http.get<OTResponse[]>(`${this.apiUrl}/`).pipe(
      // inicializar behaviorSubject con los datos obtenidos
      tap(ot => this.otSubject.next(ot)),
      catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  };
  getOTById(id: number): Observable<OTResponse>{
    return this.http.get<OTResponse>(`${this.apiUrl}/${id}/`);
  }
  addOT(OTData: OTForm): Observable<OTResponse>  {
    return this.http.post<OTResponse>(`${this.apiUrl}/`, OTData).pipe(
      tap(() => {
          this.messageService.addMessage({
              details: ['OT registrado exitosamente!'],
              role: 'success'
          })
      }),
      catchError((err: HttpErrorResponse) => this.handleError(err))
  )
  };

  addSeguimiento(idOT: number, seguimiento: any): Observable<OTResponse>  {
    return this.http.patch<OTResponse>(`${this.apiUrl}/${idOT}/`, seguimiento).pipe(
      tap(() => {
          this.messageService.addMessage({
              details: ['Procesos registrados exitosamente!'],
              role: 'success'
          })
      }),
      catchError((err: HttpErrorResponse) => this.handleError(err))
  )
  };

  addTecnico(idOT: number, tecnico: any): Observable<OTResponse>  {
    return this.http.patch<OTResponse>(`${this.apiUrl}/${idOT}/`, tecnico).pipe(
      tap(() => {
          this.messageService.addMessage({
              details: ['Responsables registrados exitosamente!'],
              role: 'success'
          })
      }),
      catchError((err: HttpErrorResponse) => this.handleError(err))
  )
  };

}
