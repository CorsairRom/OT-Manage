import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../services/productos.service';
import { Producto, ProductosResponse } from '../../interfaces/productos.model';


@Component({
  selector: 'app-listado-productos-page',
  templateUrl: './listado-productos-page.component.html',
  styleUrls: ['./listado-productos-page.component.scss'],

})
export class ListadoProductosPageComponent implements OnInit {

  productoServices = inject(ProductosService)
  productos$: ProductosResponse[] = [];

  ngOnInit(): void {
    this.obtenerProductos();
  }
  obtenerProductos(): void {
    this.productoServices.getProductos().subscribe(
      productos => {
        this.productos$ = productos;
      },
      error => {
        console.log('Error al obtener los productos:', error);
      }
    );
  }

  eliminar(id: number): void {
    // Eliminar el producto del backend
    this.productoServices.deleteProducto(id).subscribe(
      () => {
        console.log('Producto eliminado correctamente');
        // Eliminar el producto de la variable local
        this.productos$ = this.productos$.filter(producto => producto.id !== id);
      },
      error => {
        console.log('Error al eliminar el producto:', error);
      }
    );
  }



  // productos$ = this.productoServices.getProductos();



}
