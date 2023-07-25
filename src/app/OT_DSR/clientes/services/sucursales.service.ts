import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MensajeService } from '../../core/services/message.service';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, catchError, shareReplay, tap, throwError } from 'rxjs';
import { SucursalesResponse } from '../interfaces/sucursal.interface';


@Injectable({providedIn: 'root'})
export class SucursalesService {

  private http = inject(HttpClient)
  private messageService = inject(MensajeService);
  private apiUrl = `${ environment.apiUrl }/api/sucursal`
  private sucursalesSubject= new BehaviorSubject<SucursalesResponse[]>([])
  sucursales$ = this.sucursalesSubject.asObservable().pipe(shareReplay(1))

  private handleError(error: HttpErrorResponse) {
    const msg = JSON.stringify(error.error);
    if (error.status == 400) {
        const errores = Object.entries(error.error).map((msg) =>`${msg[0].toUpperCase()}: ${msg[1]}`);
        this.messageService.addMessage({
            details: errores,
            role: 'error',
        });
    }
    return throwError(() => new Error(msg));
  }

  getSucursales(): Observable<SucursalesResponse[]> {
    return this.http.get<SucursalesResponse[]>(`${this.apiUrl}/`);
  };

  getSucursalByClienteID(id: number): Observable<SucursalesResponse[]> {
    return this.http.get<SucursalesResponse[]>(`${this.apiUrl}/?cliente=${id}`).pipe(
        tap((sucursales) => {
            this.sucursalesSubject.next(sucursales)
        })
    );
  };



}
