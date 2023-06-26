import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "src/environments/environment";
import { ServicioExtra } from "../models/servicios-extra.model";


@Injectable(
    { providedIn: 'root'}
)
export class ServicioExtraService {
    private http = inject(HttpClient);
    private apiUrl = `${environment.apiUrl}/api/servicios_extras/`

    getServiciosExtras() {
        return this.http.get<ServicioExtra[]>(this.apiUrl);
    }

}