import { Injectable } from "@angular/core";
import {Subject} from 'rxjs'

export interface Message {
    details: string[];
    role: 'success' | 'error' | 'info' | 'warn'
    summary?: string
}

@Injectable({
    providedIn: 'root'
})
export class MensajeService {
    
    private messageSubject = new Subject<Message | null>()

    message$ = this.messageSubject.asObservable()

    addMessage(message: Message) {
        this.messageSubject.next(message)
    }

    clearMessage() {
        this.messageSubject.next(null)
    }

    
}