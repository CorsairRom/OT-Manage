import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { OTForm, OTResponse } from '../../interfaces/ot.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { ClienteForm, ClienteRES } from 'src/app/OT_DSR/clientes/interfaces/clientes.interface';
import { ClientesService } from 'src/app/OT_DSR/clientes/services/clientes.service';


@Component({
  selector: 'form-ot',
  templateUrl: './form-ot.component.html',
  styleUrls: ['./form-ot.component.scss']
})
export class FormOTComponent implements OnInit {

  @Input() ot? : OTResponse
  @Output() submitEvent = new EventEmitter<OTForm>();
  @Output() cancelEvent = new EventEmitter<void>();

  newCliente:boolean = false;

  clienteID?: number;


  private fb = inject(FormBuilder)
  private clientService = inject(ClientesService);

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

  ngOnInit(): void {
    if (this.ot) {
      this.clienteID = this.ot.cliente.id;
    }
  }


  handleSelectedClient(clienteId: number | null) {
    this.form.patchValue({ cliente_id: clienteId })
  }

  submit(){
    if (this.form.invalid) return;
    const values = this.form.getRawValue();
    const otForm: OTForm = {
      fecha_inicio: values.fecha_inicio,
      cliente_id: values.cliente_id!,
      observaciones: values.observaciones!,
      marca_equipo: values.marca_equipo!,
      modelo_equipo: values.modelo_equipo!,
      serie_equipo: values.serie_equipo!,
      num_parte_componente: values.num_parte_componente!,
      serie_componente: values.serie_componente!,
      seguimiento: []
    }
    this.submitEvent.emit(otForm);
  };

  submitEventCliente(clienteForm:ClienteForm){
    this.clientService.addCliente(clienteForm).subscribe(res => this.clienteChange(res))
    this.cancelEventCliente();
  }
  cancelEventCliente(){
    this.newCliente = false;
  }

  clienteChange(newCliente: ClienteRES){
    this.clientService.changeIdCliente(newCliente)
  }

  createCliente( newCliente: boolean){
    this.newCliente = newCliente;
  }


  cancel(){
    this.cancelEvent.emit();
  }
}
