import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductosResponse } from '../../interfaces/productos.model';

@Component({
  selector: 'app-detalle-dialog',
  template: `

<div *ngIf="products" class="flex align-items-center justify-content-center ">
<p-card [header]=products.nombre [subheader]=products!.modelo! [style]="{ width: '360px' }" class="text-center">
    <ng-template pTemplate="header" >
        <img alt="Card" [src]=products.imagen style="max-width: 200px;"/>
    </ng-template>
    <p>
        Nota: {{products.nota}}
    </p>
    <ng-template pTemplate="footer">
        <p-button label="Save" icon="pi pi-check"></p-button>
        <p-button label="Cancel" icon="pi pi-times" styleClass="p-button-secondary" [style]="{ 'margin-left': '.5em' }"></p-button>
    </ng-template>
</p-card>
</div>
  `,
  styles: [
  ],
  providers: [DynamicDialogRef],


})
export class DetalleDialogComponent implements OnInit {

  products?: ProductosResponse
  id?: number;

  constructor(
    private productosService: ProductosService,
    public ref: DynamicDialogRef,
    private config:DynamicDialogConfig
    ) {}
  ngOnInit(): void {
    this.id = this.config.data.id
    if (this.id) {
      this.productosService.getProductosById(this.id).subscribe(productos => this.products! = productos!)

    }
    // console.log(this.products);
  }

}
