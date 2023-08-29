import { Component, Input, OnInit, inject } from '@angular/core';
import { SaveDocumentServices } from '../../services/save-document.service';
import { MessageService } from 'primeng/api';
import { SaveDocumentRes } from '../../interfaces/save-document.interface';
import { ReporteService } from '../../services/reporte.service';


interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'save-document',
  templateUrl: './save-document.component.html',
  styles: [
  ]
})
export class SaveDocumentComponent implements OnInit{

  @Input() otID?: number;
  uploadedFiles: any[] = [];
  private saveDocument = inject(SaveDocumentServices)
  private messageService = inject(MessageService)
  private reporteService = inject(ReporteService)
  ngOnInit(): void {
    if (this.otID) {
      const query = {
        ot: this.otID
      }
      this.saveDocument.getDocument(query).subscribe(
        (documents: SaveDocumentRes[]) => {
          documents.forEach(doc => {
            this.uploadedFiles.push({file: doc.document, name: doc.name, id: doc.id})
          })
        }
      )
    }
  }

  onUpload(event:UploadEvent) {

    for(let file of event.files) {
        const documentForm:SaveDocumentRes = {
          ot: this.otID!,
          name: file.name,
          document: file
        }
        const formData = new FormData();
        formData.append('ot', this.otID!.toString());
        formData.append('name', file.name);
        formData.append('document', file);
        console.log(file);
        this.saveDocument.saveDocument(formData).subscribe()
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
  viewDocument(idOT: number){
    this.uploadedFiles.forEach(res => window.open(res.file))


  }

}
