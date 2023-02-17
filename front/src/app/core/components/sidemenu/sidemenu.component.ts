import { AfterViewInit, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AppNavigationService } from '../../service/app-navigation.service';
import { StoreApp } from '../../store/app.store';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements AfterViewInit {
  constructor(
    public storeApp: StoreApp,
    private appNavigationService: AppNavigationService
  ) {}

  rendered: boolean = false;
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.rendered = true;
    });
  }

  menuItems: MenuItem[] = this.appNavigationService.navigation;
}
