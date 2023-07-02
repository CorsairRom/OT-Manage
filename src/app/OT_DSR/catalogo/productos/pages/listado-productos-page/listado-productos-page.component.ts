import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';

import { ConfirmationService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { MessagesModule } from 'primeng/messages';
import { finalize  } from 'rxjs';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-productos-page',
  templateUrl: './listado-productos-page.component.html',
  styleUrls: ['./listado-productos-page.component.scss'],

})
export class ListadoProductosPageComponent implements OnInit {
  cols: { field: string; header: string }[] = [];

  ngOnInit(): void {
    this.cols = [
            { field: 'rut_trab', header: 'Rut' },
            { field: 'pri_nom_trab', header: 'Nombre' },
            { field: 'pri_ape_trab', header: "Apellido"},
            { field: 'tipo_trab', header: 'Tipo Trabajador' },
            { field: 'celular', header: 'Celular' },
        ];
  }
}
