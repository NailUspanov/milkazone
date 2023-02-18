import { Injectable } from '@angular/core';
import { action, observable } from 'mobx-angular';
import { DataService } from '../service/websocket.service';

@Injectable({ providedIn: 'root' })
export class StoreMachine {
  constructor(private dataService: DataService) {}
  @observable data: any;

  @action getData() {
    this.data = this.dataService.getQuotes().subscribe((quote: any) => {
      this.data = quote;
    });
  }
}
