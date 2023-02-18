import { Component, OnInit } from '@angular/core';
import { StoreApp } from '../../store/app.store';

@Component({
  selector: 'app-common-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class CommonLayoutComponent implements OnInit {
  constructor(public storeApp: StoreApp) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
