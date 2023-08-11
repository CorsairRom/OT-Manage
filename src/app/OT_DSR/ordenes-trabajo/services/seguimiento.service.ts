import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MensajeService } from '../../core/services/message.service';
import { throwError } from 'rxjs';
import { ProcesosOT } from '../interfaces/procesos-ot.interface';


@Injectable({providedIn: 'root'})
export class SeguimientoService {

  private http = inject(HttpClient)
  private messageService = inject(MensajeService);
  private apiUrlProcesosOT = `${environment.apiUrl}/api/procesoOT`;

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

  getProcesosOT(){
    return this.http.get<ProcesosOT[]>(`${this.apiUrlProcesosOT}/`)
  }
}
