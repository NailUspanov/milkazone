import { Injectable } from '@angular/core';
import { observable, action } from 'mobx';

@Injectable({ providedIn: 'root' })
export class StoreApp {
  constructor() {}

  @observable isSideMenuFixed: boolean =
    localStorage.getItem('isSideMenuFixed') === 'true' || false;

  @action toogleSideMenuFixed(val?: boolean) {
    this.isSideMenuFixed = val ?? !this.isSideMenuFixed;
    localStorage.setItem('isSideMenuFixed', String(this.isSideMenuFixed));
  }
}
