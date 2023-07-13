import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ImageModule } from 'primeng/image';

@NgModule({

  exports: [
    ButtonModule,
    ConfirmPopupModule,
    DialogModule,
    InputTextModule,
    MessagesModule,
    MultiSelectModule,
    OverlayPanelModule,
    TableModule,
    TagModule,
    ToolbarModule,
    SelectButtonModule,
    InputTextareaModule,
    InputNumberModule,
    DropdownModule,
    FileUploadModule,
    ToastModule,
    ImageModule
  ]
})
export class PrimeNGModule { }
