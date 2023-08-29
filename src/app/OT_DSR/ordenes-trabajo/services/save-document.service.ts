import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { MensajeService } from '../../core/services/message.service';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { SaveDocumentRes } from '../interfaces/save-document.interface';

@Injectable({providedIn: 'root'})
export class SaveDocumentServices {
  private http = inject(HttpClient)
  private messageService = inject(MensajeService);
  private apiUrl = `${ environment.apiUrl }/api/save_document`;

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

  getDocument(query: {} = {}) {
    return this.http.get<SaveDocumentRes[]>(`${this.apiUrl}/`, {params: query});
  }

  saveDocument(documentForm:FormData){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append(' boundary' , '------WebKitFormBoundary7MA4YWxkTrZu0gW');
    return this.http.post(`${this.apiUrl}/`, documentForm, {headers});
  }

}
