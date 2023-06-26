import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "src/environments/environment";
import { TipoPropiedad } from "../models/tipo-propiedad.model";

@Injectable(
    {
        providedIn: 'root',
    }
)
export class TipoPropiedadesService {
    private http = inject(HttpClient);
    private apiUrl = `${environment.apiUrl}/api/tipo_propiedad/`

    getTipoPropiedades() {
        return this.http.get<TipoPropiedad[]>(this.apiUrl);
    }

    getTipoPropiedad(id:number){
        return this.http.get<TipoPropiedad>(`${this.apiUrl}${id}/`);
    }

}
