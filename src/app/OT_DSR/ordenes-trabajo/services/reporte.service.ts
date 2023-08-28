import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ReporteService {

  private http = inject(HttpClient)
  private apiUrl = `${ environment.apiUrl }/api/report`;

  getReporteOT( queryParams: {} = {}){
    const headers = { 'Content-Type': 'application/pdf' }
    return this.http.get( `${this.apiUrl}/`, {headers: headers, responseType: 'arraybuffer' , params: queryParams},)
  }

}

