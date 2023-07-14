import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-actualizar-producto-page',
  templateUrl: './actualizar-producto-page.component.html',
  styleUrls: ['./actualizar-producto-page.component.scss']
})
export class ActualizarProductoPageComponent {


  router = inject(Router)
  location = inject(Location)
  productService = inject(ProductosService)
  activatedRoute = inject(ActivatedRoute)

  producto$ = this.activatedRoute.paramMap.pipe(
    map(params => Number(params.get('id'))),
    switchMap(id => this.productService.getProductosById(id))
  )

  submit(formData: FormData){
    this.productService.addProducto(formData).subscribe(data => this.router.navigate(['catalogo/productos/listado']));

  }
  //TODO: Agregar otro boton para agregar varios productos
  //y ademas una ventana de retroalimentacion cuando el producto este agregado
  //TODO: Agregar https://www.npmjs.com/package/jsbarcode

  cancel() {
    this.location.back();
  }


}
