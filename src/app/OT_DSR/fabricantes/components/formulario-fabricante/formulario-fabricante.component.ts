import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-fabricante',
  templateUrl: './formulario-fabricante.component.html',
  styleUrls: ['./formulario-fabricante.component.scss']
})
export class FormularioFabricanteComponent {
  display: boolean = false;

  inputTextFabricante: string = '';

  @Output()
  InputFabricanteEmit = new EventEmitter<string>();

  enviarValor(){
    if(this.inputTextFabricante.length ===0) return;
    this.InputFabricanteEmit.emit(this.inputTextFabricante);
    this.inputTextFabricante = '';
    this.display = false;
  }
}
