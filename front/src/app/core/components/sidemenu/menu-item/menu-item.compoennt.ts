import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { StoreApp } from 'src/app/core/store/app.store';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnChanges {
  constructor(public storeApp: StoreApp, public router: Router) {}

  @Input() item: MenuItem | null = null;

  get isItemVisible(): boolean {
    return (
      (this.item?.visible ?? true) &&
      (this.hasChild ? this.hasVisibleChild : true)
    );
  }

  get hasVisibleChild(): boolean {
    return !!this.item?.items?.some((x) => x.visible ?? true);
  }

  isChildVisible: boolean = false;
  public toggleChildVisibility() {
    this.isChildVisible = !this.isChildVisible;
  }

  ngOnChanges() {
    this.isChildVisible = this.hasActiveChild;
  }

  public get hasActiveChild(): boolean {
    return !!this.item?.items?.some((x) =>
      this.router.url.startsWith(x.routerLink)
    );
  }

  public get hasChild(): boolean {
    return Number(this.item?.items?.length) > 0;
  }
}
