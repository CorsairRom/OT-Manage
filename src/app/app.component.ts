import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { MensajeService, Message } from './OT_DSR/core/services/message.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [MessageService]
})
export class AppComponent implements OnInit {



    constructor(
        private primengConfig: PrimeNGConfig,
        private mensajeService: MensajeService,
        private messageService: MessageService,
    ) {}


    ngOnInit() {
        this.primengConfig.ripple = true;
        this.mensajeService.message$
            .subscribe((msj) => {
                if(msj) this.showMessages(msj)
            })
    }


    showMessages(mensaje: Message) {
        mensaje.details.forEach(detail => {
            this.messageService.add({ severity: mensaje.role, summary: mensaje.summary ?? '', detail: detail });
        })
    }


}
