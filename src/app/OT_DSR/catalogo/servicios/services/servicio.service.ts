import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MensajeService } from 'src/app/OT_DSR/core/services/message.service';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { ServiciosResponse } from '../interfaces/servicio.interface';

@Injectable({ providedIn: 'root' })
export class ServicioService {

  private http = inject(HttpClient)
  private messageService = inject(MensajeService);
  private apiUrl = `${ environment.apiUrl }/api/servicio`

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
  }
  getServicios(query: {} = {}) {
    return this.http.get<ServiciosResponse[]>(`${this.apiUrl}/`, {params: query});
  }

  addProducto(servicioData: ServiciosResponse): Observable<ServiciosResponse>  {
    return this.http.post<ServiciosResponse>(`${this.apiUrl}/`, servicioData);
  }

}
