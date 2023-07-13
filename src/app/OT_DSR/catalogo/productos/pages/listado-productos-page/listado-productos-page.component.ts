import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-listado-productos-page',
  templateUrl: './listado-productos-page.component.html',
  styleUrls: ['./listado-productos-page.component.scss'],

})
export class ListadoProductosPageComponent {

  productoServices = inject(ProductosService)

  productos$ = this.productoServices.getProductos();


}
