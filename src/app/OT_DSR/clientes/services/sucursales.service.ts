import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MensajeService } from '../../core/services/message.service';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, catchError, shareReplay, tap, throwError } from 'rxjs';
import { SucursalesForm, SucursalesResponse } from '../interfaces/sucursal.interface';


@Injectable({providedIn: 'root'})
export class SucursalesService {

  private http = inject(HttpClient)
  private messageService = inject(MensajeService);
  private apiUrl = `${ environment.apiUrl }/api/sucursal`
  private sucursalesSubject= new BehaviorSubject<SucursalesResponse[]>([])
  sucursales$ = this.sucursalesSubject.asObservable()

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

  addSucursal(sucursalForm: SucursalesForm): Observable<SucursalesResponse> {
    return this.http.post<SucursalesResponse>(`${this.apiUrl}/`, sucursalForm).pipe(
      tap((nuevaSucursal) => {
          this.messageService.addMessage({
              details: ['Sucursal registrado exitosamente!'],
              role: 'success'
          });
          const sucursalesActuales = this.sucursalesSubject.getValue();
          this.sucursalesSubject.next([...sucursalesActuales, nuevaSucursal]);
      }),
      catchError((err: HttpErrorResponse) => this.handleError(err))
  )
  }

  deleteSucursal(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}/`).pipe(
      tap(() => {
          this.messageService.addMessage({
              details: ['Sucursal eliminado exitosamente!'],
              role: 'warn'
          });
          // Eliminar la sucursal del BehaviorSubject
          const sucursalesActuales = this.sucursalesSubject.getValue();
          const nuevasSucursales = sucursalesActuales.filter((sucursal) => sucursal.id !== id);
          this.sucursalesSubject.next(nuevasSucursales);
      }),
      catchError((err: HttpErrorResponse) => this.handleError(err))
    )
  }



}
