import { Component, OnInit, inject } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import { ServiciosResponse } from '../../interfaces/servicio.interface';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-listado-servicios-page',
  templateUrl: './listado-servicios-page.component.html',
  styleUrls: ['./listado-servicios-page.component.scss'],
  providers: [DynamicDialogRef, DynamicDialogConfig]
})
export class ListadoServiciosPageComponent implements OnInit {

  servicios$: ServiciosResponse[] = [];



  constructor(
    private serviciosServices: ServicioService,
    private config: DynamicDialogConfig,
  ){

  }



  ngOnInit(): void {
    this.obtenerServicios();
  }

  obtenerServicios(): void {
    if (this.servicios$.length>0) return;
    this.serviciosServices.getServicios().subscribe(
      servicios => {
        this.servicios$ = servicios;
      },
      error => {
        console.log('Error al obtener los productos:', error);
      }
    );
  }

  //TODO: Si el servicio se encuentra en una OT este no se puede eliminar sino solo editar

  // eliminar(codigo: string): void {
  //   // Eliminar el producto del backend
  //   this.serviciosServices.deleteServicios(id).subscribe(
  //     () => {
  //       console.log('Producto eliminado correctamente');
  //       // Eliminar el producto de la variable local
  //       this.productos$ = this.productos$.filter(producto => producto.id !== id);
  //     },
  //     error => {
  //       console.log('Error al eliminar el producto:', error);
  //     }
  //   );
  // }



}
