import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MensajeService } from '../../core/services/message.service';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { informeOTResponse, informeOTForm, PatchInformeOT } from '../interfaces/informe-ot.interface';

@Injectable({providedIn: 'root'})
export class InformeOTService {

  private http = inject(HttpClient)
  private messageService = inject(MensajeService);
  private apiUrl = `${ environment.apiUrl }/api/informeOT`;

  private otSubject = new BehaviorSubject<informeOTResponse[]>([]);
  informeOT$ = this.otSubject.asObservable();

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

  getInforme_OT(){
    return this.http.get<informeOTResponse[]>(`${this.apiUrl}/`).pipe(
      // inicializar behaviorSubject con los datos obtenidos
      tap(infoOT => this.otSubject.next(infoOT)),
      catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  };

  addInforme_OT(informeData: informeOTForm): Observable<informeOTResponse>  {
    return this.http.post<informeOTResponse>(`${this.apiUrl}/`, informeData).pipe(
      tap(() => {
          this.messageService.addMessage({
              details: ['Informe OT registrado exitosamente!'],
              role: 'success'
          })
      }),
      catchError((err: HttpErrorResponse) => this.handleError(err))
  )
  }
  updateServicio(informeData: PatchInformeOT) {
    return this.http.patch<informeOTResponse>(`${this.apiUrl}/${informeData.id}/`, informeData).pipe(
      tap((updatedInforme: informeOTResponse) => {
        this.messageService.addMessage({
          details: ['Informe actualizado exitosamente!'],
          role: 'success'
        });

        // Actualizar los datos del servicio con el servicio actualizado
        const informe = this.otSubject.getValue();
        const informeIndex = informe.findIndex(i => i.id === updatedInforme.id);
        if (informeIndex !== -1) {
          informe[informeIndex] = updatedInforme;
          this.otSubject.next(informe);
        }
      }),
      catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  }
}


