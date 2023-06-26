import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { DetalleArriendo } from "../models/detalle-arriendo.model";


@Injectable({
    providedIn: 'root'
})
export class DetalleArriendoService {
    private http = inject(HttpClient)
    private apiUrl = `${environment.apiUrl}/api/detalle_arriendo/`


    getDetallesArriendo() {
        return this.http.get<DetalleArriendo[]>(this.apiUrl);
    }
}