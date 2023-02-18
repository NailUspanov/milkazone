import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../../service/websocket.service';
import { StoreApp } from '../../store/app.store';

@Component({
  selector: 'app-common-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class CommonLayoutComponent implements OnInit {
  constructor(public storeApp: StoreApp, private socket: WebSocketService) {}

  ngOnInit(): void {
    this.socket.send('123');
  }
}
