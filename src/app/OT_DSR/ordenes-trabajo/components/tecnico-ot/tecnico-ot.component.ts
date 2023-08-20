import { Component, Input, OnInit, Pipe, inject } from '@angular/core';
import { UsuariosResponse } from 'src/app/OT_DSR/administrar-accesos/usuarios/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/OT_DSR/administrar-accesos/usuarios/services/usuarios.service';
import { map } from 'rxjs';
import { OtService } from '../../services/ot.service';
import { OTResponse } from '../../interfaces/ot.interface';

@Component({
  selector: 'tecnico-ot',
  templateUrl: './tecnico-ot.component.html',
  styles: [
  ]
})
export class TecnicoOTComponent implements OnInit {

  @Input() OtID: number = 0;
  @Input() ot?: OTResponse;
  selectedTecnico?: UsuariosResponse;
  selectedSubrogante?: UsuariosResponse;
  tecnicos?: UsuariosResponse[];
  disabledTecnicos: boolean = false;

  private usuarioService = inject(UsuariosService);
  private otService = inject(OtService)


  ngOnInit(): void {

    if(this.ot?.tecnico){
      const tecnico = this.ot.tecnico.id
      this.usuarioService.getUsuarioById(tecnico).subscribe(res => this.selectedTecnico = res)
      this.disabledTecnicos = true
    }
    if(this.ot?.subrogante){
      const subrogante = this.ot.subrogante.id
      this.usuarioService.getUsuarioById(subrogante).subscribe(res => this.selectedSubrogante = res)
      this.disabledTecnicos = true
    }


    this.usuarioService.getUsuarios().pipe(
      map(user => user.filter(user => user.is_superuser===false)
    )
    ).subscribe(tec => this.tecnicos = tec)


}

  saveTecnico(
  ){
    if(!this.selectedTecnico || !this.selectedSubrogante) return;
    if(this.selectedTecnico){
      const data_tecnico = {
        tecnico_id : this.selectedTecnico.id
      }
      this.otService.addTecnico(this.OtID, data_tecnico).subscribe(res => console.log(res))
    }
    if(this.selectedSubrogante){

      const data_subrogante = {
        subrogante_id: this.selectedSubrogante.id
      }
      this.otService.addTecnico(this.OtID, data_subrogante).subscribe(res => console.log(res))
    }
    // console.log(this.selectedTecnico);
    this.disabledTecnicos = true
  }

  editTecnico(
  ){
    this.disabledTecnicos = false
  }
}
