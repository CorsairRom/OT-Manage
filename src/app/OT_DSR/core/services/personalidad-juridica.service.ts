import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "src/environments/environment";
import { PersonalidadJuridica } from "../models/personalidad-juridica.model";

@Injectable({
    providedIn: 'root',
})
export class PersonalidadJuridicaService {
    private http = inject(HttpClient)
    private apiUrl = `${environment.apiUrl}/api/personalidad_juridica/`


    getPersonalidadJuridica() {
        return this.http.get<PersonalidadJuridica[]>(this.apiUrl);
    }
}