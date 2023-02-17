import { Component } from '@angular/core';
import { StoreApp } from '../../store/app.store';

@Component({
  selector: 'app-common-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class CommonLayoutComponent {
  constructor(public storeApp: StoreApp) {}
}
