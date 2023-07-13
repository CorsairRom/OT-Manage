import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule, Location } from '@angular/common';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-registro-producto-page',
  templateUrl: './registro-producto-page.component.html',
  styleUrls: ['./registro-producto-page.component.scss']
})
export class RegistroProductoPageComponent {

  router = inject(Router)
  location = inject(Location)
  productService = inject(ProductosService)

  submit(formData: FormData){
    this.productService.addProducto(formData).subscribe(data => this.router.navigate(['catalogo/productos/listado']));

  }
  //TODO: Agregar otro boton para agregar varios productos
  //y ademas una ventana de retroalimentacion cuando el producto este agregado

  cancel() {
    this.location.back();
  }

}
