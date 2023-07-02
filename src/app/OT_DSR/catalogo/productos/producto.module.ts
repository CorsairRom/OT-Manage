import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoRoutingModule } from './producto-routing.module';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
	imports: [
		CommonModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    ConfirmPopupModule,
    MessagesModule,
    MultiSelectModule,
	]
})
export class ProductoModule{


}
