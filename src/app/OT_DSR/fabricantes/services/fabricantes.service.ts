import { Injectable,  inject } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpParamsOptions } from "@angular/common/http";
import { MensajeService } from "src/app/OT_DSR/core/services/message.service";
import { catchError, tap, throwError } from "rxjs";
import { Fabricantes, FabricanteForm } from "../interfaces/fabricantes.model";

@Injectable({
  providedIn: 'root'
})
export class FabricanteServices {
  private http = inject(HttpClient)
  private messageService = inject(MensajeService);
  private apiUrl = `${environment.apiUrl}/api/fabricante`



  getFabricantes(query: {} = {}) {
    return this.http.get<Fabricantes[]>(`${this.apiUrl}/`, {params: query});
}
  createFabricante(nombre:FabricanteForm) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.apiUrl}/`, nombre).pipe(
      tap(() => {

          this.messageService.addMessage({
              details: ['Fabricante registrado exitosamente!'],
              role: 'success'
          })
      }),
      catchError((error: HttpErrorResponse) => this.handleError(error))
  )

  }

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

}
