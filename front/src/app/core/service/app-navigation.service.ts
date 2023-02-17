import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable()
export class AppNavigationService {
  public get navigation(): MenuItem[] {
    return [
      {
        label: 'Аналитика',
        icon: 'pi pi-cog',
        items: [
          { label: 'Список', icon: 'pi pi-users', routerLink: '/first-screen' },
          {
            label: 'Не список',
            icon: 'pi pi-database',
            routerLink: '/second-screen',
          },
        ],
      },
    ];
  }
}
