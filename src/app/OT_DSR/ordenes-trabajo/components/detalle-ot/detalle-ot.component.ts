import { Component, Input, OnInit, inject } from '@angular/core';
import { OTResponse, ProcesosOT } from '../../interfaces/ot.interface';
import { SeguimientoService } from '../../services/seguimiento.service';

@Component({
  selector: 'detalle-ot',
  templateUrl: './detalle-ot.component.html',
  styles: [
  ]
})
export class DetalleOTComponent implements OnInit{

  @Input() ot?: OTResponse;
  seguimientoService = inject(SeguimientoService)

  procesoOT?:ProcesosOT[];
  selectedCategories: any[] = [];
  categories: any[] = [
      { name: 'Accounting', key: 'A' },
      { name: 'Marketing', key: 'M' },
      { name: 'Production', key: 'P' },
      { name: 'Research', key: 'R' }
  ];

  ngOnInit(): void {
    this.seguimientoService.getProcesosOT().subscribe(res => this.procesoOT = res);
  }

}
