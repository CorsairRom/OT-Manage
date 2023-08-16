import { Component, OnInit } from '@angular/core';
import { informeOT } from '../../interfaces/informe-ot.interface';


interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'informe-ot',
  templateUrl: './informe-ot.component.html',
  styleUrls: ['./informe-ot.component.scss']
})
export class InformeOTComponent implements OnInit {

  cols!: Column[];
  informeOT: any[] = [];

  ngOnInit(): void {

    this.informeOT.push([{
      datetime: '2021-01-01',
      state: 'Pendiente',
      observation: 'Prueba'
    }])

    this.cols = [
      { field: 'datetime', header: 'Fecha / Hora' },
      { field: 'state', header: 'Estado' },
      { field: 'observation', header: 'Observación' }
  ];
  }
}
