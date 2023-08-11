import { Component, Input } from '@angular/core';
import { OTResponse } from '../../interfaces/ot.interface';

@Component({
  selector: 'detalle-ot',
  templateUrl: './detalle-ot.component.html',
  styles: [
  ]
})
export class DetalleOTComponent {

  @Input() ot?: OTResponse;
  selectedCategories: any[] = [];

    categories: any[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];

}
