import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef , DynamicDialogConfig} from 'primeng/dynamicdialog';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ProductosResponse } from '../../interfaces/productos.model';


@Component({
  selector: 'app-detalle-producto-page',
  templateUrl: './detalle-producto-page.component.html',
  styleUrls: ['./detalle-producto-page.component.scss'],
  providers: [DynamicDialogRef, DynamicDialogConfig]
})
export class DetalleProductoPageComponent implements OnInit {

  products: ProductosResponse | undefined;
  id?: number | null;

  constructor(
    private productosService: ProductosService,
    public ref: DynamicDialogRef,
    private dynamicDialogConfig:DynamicDialogConfig
    ) {}

  ngOnInit(): void {
    console.log(this.dynamicDialogConfig.data);
    // console.log(this.id);
    // if (this.id) {
    //   console.log(this.id);
    // }
  }


}


