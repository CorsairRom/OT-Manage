import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FabricanteServices } from '../../services/fabricantes.service';
import { ListadoFabricantesComponent } from "../../components/listado-fabricantes/listado-fabricantes.component";
import { FabricanteForm, Fabricantes } from '../../interfaces/fabricantes.model';


@Component({
  selector: 'app-listado-fabricantes-page',
  templateUrl: './listado-fabricantes-page.component.html',
  styleUrls: ['./listado-fabricantes-page.component.scss']
})
export class ListadoFabricantesPageComponent {
  fabricanteService = inject(FabricanteServices)
  router = inject(Router)

  fabricanteData: FabricanteForm = {
    nombre: ''
  };

  fabricantes$ = this.fabricanteService.getFabricantes()
  handleRegistrarEvent(nombre: string) {
    this.fabricanteData.nombre=nombre
    this.fabricanteService.createFabricante(this.fabricanteData).subscribe(()=>{
      window.location.reload();
    })
    console.log(nombre);
  }
}
