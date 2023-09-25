import { Component, inject } from '@angular/core';
import { OTForm } from '../../interfaces/ot.interface';
import {Location } from '@angular/common';
import { OtService } from '../../services/ot.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-ordenes-trabajo-page',
  templateUrl: './registro-ordenes-trabajo-page.component.html',
  styleUrls: ['./registro-ordenes-trabajo-page.component.scss']
})
export class RegistroOrdenesTrabajoPageComponent {

  location = inject(Location)
  otService = inject(OtService)
  router = inject(Router)

  cancelEvent(){
    this.location.back();
  }

  submitEvent(otForm: OTForm){
    console.log(otForm);
    this.otService.addOT(otForm).subscribe((res)=> this.router.navigate([`ordenes-trabajo/${res.id}/detalle`]))

  }
}
