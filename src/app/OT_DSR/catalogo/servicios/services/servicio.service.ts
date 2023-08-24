import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MensajeService } from 'src/app/OT_DSR/core/services/message.service';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { ServiciosForm, ServiciosResponse } from '../interfaces/servicio.interface';

@Injectable({ providedIn: 'root' })
export class ServicioService {

  private http = inject(HttpClient)
  private messageService = inject(MensajeService);
  private apiUrl = `${ environment.apiUrl }/api/servicio`

  private serviciosSubject = new BehaviorSubject<ServiciosResponse[]>([]);
  servicios$ = this.serviciosSubject.asObservable();

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
    return this.http.get<ServiciosResponse[]>(`${this.apiUrl}/`, {params: query}).pipe(
      tap(servicios => {
        // Actualizar los datos del servicio en el BehaviorSubject
        this.serviciosSubject.next(servicios);
      }),
      catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  }

  addProducto(servicioData: ServiciosForm): Observable<ServiciosResponse>  {
    return this.http.post<ServiciosResponse>(`${this.apiUrl}/`, servicioData).pipe(
      tap(() => {
          this.messageService.addMessage({
              details: ['Servicio registrado exitosamente!'],
              role: 'success'
          })
      }),
      catchError((err: HttpErrorResponse) => this.handleError(err))
  )
  }

  getServicioById(id:number) {
    return this.http.get<ServiciosResponse>(`${this.apiUrl}/${id}`);
  }

  updateServicio(servicioFormData: ServiciosForm, id: number) {
    return this.http.put<ServiciosResponse>(`${this.apiUrl}/${id}/`, servicioFormData).pipe(
      tap((updatedServicio: ServiciosResponse) => {
        this.messageService.addMessage({
          details: ['Servicio actualizado exitosamente!'],
          role: 'success'
        });

        // Actualizar los datos del servicio con el servicio actualizado
        const servicios = this.serviciosSubject.getValue();
        const servicioIndex = servicios.findIndex(s => s.id === updatedServicio.id);
        if (servicioIndex !== -1) {
          servicios[servicioIndex] = updatedServicio;
          this.serviciosSubject.next(servicios);
        }
      }),
      catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  }
  }


  // updateServicio(productoFormData: ServiciosForm, id:number){

  //   return this.http.put<ServiciosResponse>(`${this.apiUrl}/${id}/`, productoFormData).pipe(
  //     tap(() => {
  //         this.messageService.addMessage({
  //             details: ['Servicio registrado exitosamente!'],
  //             role: 'success'
  //         });
  //         this.fetchData();
  //     }),
  //     catchError((err: HttpErrorResponse) => this.handleError(err))
  // )
  // }



