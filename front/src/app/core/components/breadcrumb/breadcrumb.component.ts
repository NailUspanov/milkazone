import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AppNavigationService } from '../../service/app-navigation.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadCrumbComponent {
  constructor(private appNavigationService: AppNavigationService) {}

  items: MenuItem[] = this.appNavigationService.navigation;
}
