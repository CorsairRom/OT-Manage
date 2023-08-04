import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MensajeService } from '../../core/services/message.service';
import { environment } from 'src/environments/environment';
import { catchError, throwError } from 'rxjs';
import { OTResponse } from '../interfaces/ot.interface';

@Injectable({
  providedIn: 'root'
})
export class OtService {
  private http = inject(HttpClient)
  private messageService = inject(MensajeService);
  private apiUrl = `${ environment.apiUrl }/api/OT`;

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
    return this.http.get<OTResponse>(`${this.apiUrl}/`).pipe(
      catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  }

}
