import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { io } from 'socket.io-client';
import { Socket } from '../model/socket';

@Injectable()
export class DataService {
  socket: Socket | null = null;
  observer?: Observer<number>;

  getQuotes(): Observable<number> {
    this.socket = io('http://localhost:8080');

    this.socket!.on('data', (res: any) => {
      this.observer!.next(res.data);
    });

    return this.createObservable();
  }

  createObservable(): Observable<number> {
    return new Observable<number>((observer: any) => {
      this.observer = observer;
    });
  }

  //   private handleError(error: any) {
  //     console.error('server error:', error);
  //     if (error.error instanceof Error) {
  //       let errMessage = error.error.message;
  //       return Observable.throw(errMessage);
  //     }
  //     return Observable.throw(error || 'Socket.io server error');
  //   }
}
