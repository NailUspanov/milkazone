import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumb-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class BreadCrumbItemComponent {
  constructor(private router: Router) {}

  @Input() item: MenuItem | null = null;
  @Input() last: boolean | null = null;

  public get currentRouteSame() {
    return this.router.url.startsWith(this.item?.routerLink);
  }
}
