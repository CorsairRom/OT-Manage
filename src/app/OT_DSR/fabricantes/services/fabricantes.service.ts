import { Injectable,  inject } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient, HttpErrorResponse, HttpParams, HttpParamsOptions } from "@angular/common/http";
import { MensajeService } from "src/app/OT_DSR/core/services/message.service";
import { catchError, tap, throwError } from "rxjs";
import { Fabricantes } from "../interfaces/fabricantes.model";

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

}
