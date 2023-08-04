import { Component, OnInit, inject } from '@angular/core';
import { OTResponse } from '../../interfaces/ot.interface';
import { Subscription } from 'rxjs';
import { OtService } from '../../services/ot.service';

@Component({
  selector: 'app-listado-ordenes-trabajo-page',
  templateUrl: './listado-ordenes-trabajo-page.component.html',
  styleUrls: ['./listado-ordenes-trabajo-page.component.scss']
})
export class ListadoOrdenesTrabajoPageComponent implements OnInit {

  ot$: OTResponse[] = [];
  private subscription?: Subscription;
  otService = inject(OtService);

  ngOnInit(): void {
    this.subscription = this.otService.ot$.subscribe(ot => this.ot$ = ot);
    this.otService.getOT().subscribe(ot => this.ot$ = ot);
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }


}
