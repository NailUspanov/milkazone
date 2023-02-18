import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppNavigationService } from './service/app-navigation.service';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AccordionModule } from 'primeng/accordion';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CommonLayoutComponent } from './components/layout/layout.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { BreadCrumbItemComponent } from './components/breadcrumb/item/item.component';
import { BreadCrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuItemComponent } from './components/sidemenu/menu-item/menu-item.compoennt';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './service/websocket.service';

@NgModule({
  declarations: [
    SidemenuComponent,
    CommonLayoutComponent,
    BreadCrumbItemComponent,
    BreadCrumbComponent,
    FooterComponent,
    MenuItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PanelMenuModule,
    AccordionModule,
    BreadcrumbModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [AppNavigationService, DataService],
})
export class CoreModule {}
