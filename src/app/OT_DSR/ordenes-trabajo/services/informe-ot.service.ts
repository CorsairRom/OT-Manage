import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MensajeService } from '../../core/services/message.service';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class InformeOTService {

  private http = inject(HttpClient)
  private messageService = inject(MensajeService);
  private apiUrl = `${ environment.apiUrl }/api/informeOT`;




}
