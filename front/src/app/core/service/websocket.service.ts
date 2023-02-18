import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = webSocket('ws://localhost:8000/ws');
  }

  subscribe() {
    this.socket$.subscribe();
  }

  send(message: any) {
    this.socket$.subscribe(
      (msg) => {
        console.log('Message from server', msg);
      },
      (err) => {
        console.log('Error with websocket connection:', err);
      },
      () => {
        console.log('complete');
      }
    );
    this.socket$.next('my message');
  }

  getMessages() {
    return this.socket$.asObservable();
  }
}
