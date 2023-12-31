import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { MensajeService } from 'src/app/OT_DSR/core/services/message.service';
import { environment } from 'src/environments/environment';
import { Producto, ProductoForm, ProductosResponse } from '../interfaces/productos.model';

@Injectable({ providedIn: 'root' })
export class ProductosService {

  private http = inject(HttpClient)
  private messageService = inject(MensajeService);
  private apiUrl = `${ environment.apiUrl }/api/producto`

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
  getProductos(query: {} = {}) {
    return this.http.get<ProductosResponse[]>(`${this.apiUrl}/`, {params: query});
  }

  addProducto(productoFormData: FormData): Observable<ProductoForm>  {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post<ProductoForm>(`${this.apiUrl}/`, productoFormData, {headers});
  }

  deleteProducto(id: number){
    return this.http.delete<Producto>(`${this.apiUrl}/${id}`);
  }

  getProductosById(id:number) {
    return this.http.get<ProductosResponse>(`${this.apiUrl}/${id}`);
  }

  updateProducto(productoFormData: FormData, id:number){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.put<ProductoForm>(`${this.apiUrl}/${id}/`, productoFormData, {headers});
  }

}
