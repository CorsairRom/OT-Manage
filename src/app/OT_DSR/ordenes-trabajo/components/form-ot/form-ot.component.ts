import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { OTForm, OTResponse } from '../../interfaces/ot.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { ClienteRES } from 'src/app/OT_DSR/clientes/interfaces/clientes.interface';

@Component({
  selector: 'form-ot',
  templateUrl: './form-ot.component.html',
  styleUrls: ['./form-ot.component.scss']
})
export class FormOTComponent {

  @Input() ot? : OTResponse
  @Output() submitEvent = new EventEmitter<OTForm>();
  @Output() cancelEvent = new EventEmitter<void>();



  private fb = inject(FormBuilder)

  form = this.fb.group({
    fecha_inicio: this.fb.control<Date>(new Date(), [Validators.required]),
    cliente_id: this.fb.control<number | null>(null, [Validators.required]),
    observaciones: this.fb.control<string>('', [Validators.required]),
    marca_equipo: this.fb.control<string>('', [Validators.required, Validators.maxLength(50)]),
    modelo_equipo: this.fb.control<string>('', [Validators.required, Validators.maxLength(50)]),
    serie_equipo: this.fb.control<string>('', [Validators.required, Validators.maxLength(50)]),
    num_parte_componente: this.fb.control<string>('', [Validators.required, Validators.maxLength(50)]),
    serie_componente: this.fb.control<string>('', [Validators.required, Validators.maxLength(50)]),
  })


  handleSelectedClient(clienteId: number | null) {
    this.form.patchValue({ cliente_id: clienteId })
  }
}
