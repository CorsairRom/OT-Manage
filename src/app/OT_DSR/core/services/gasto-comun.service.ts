import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "src/environments/environment";
import { GastoComun } from "../models/gasto-comun.model";

@Injectable(
    { providedIn: 'root'}
)
export class GastoComunService {
    private http = inject(HttpClient);
    private apiUrl = `${environment.apiUrl}/api/gasto_comun/`

    getGastosComunes() {
        return this.http.get<GastoComun[]>(this.apiUrl);
    }

}