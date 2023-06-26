import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comuna, Region } from '../models/ubicaciones.model';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UbicacionService {
    private http = inject(HttpClient);

    getRegiones() {
        return this.http.get<Region[]>(`${environment.apiUrl}/api/regiones/`).pipe(map(regiones => regiones.sort((a, b) => (a.orden - b.orden) )))
    }

    getComunasByRegion(regionId: number) {
        return this.http.get<Comuna[]>(`${environment.apiUrl}/api/comunas/?reg_id=${regionId}`);
    }

    getComunaById(comunaId: number) {
        return this.http.get<Comuna>(`${environment.apiUrl}/api/comunas/${comunaId}`)
    }

}
