import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { PanelModule } from 'primeng/panel';
import { ImageComponent } from './compoents/form/image/image.component';
import { MachineInfoComponent } from './compoents/machine-info/machine-info.component';

@NgModule({
  declarations: [ImageComponent, MachineInfoComponent],
  imports: [
    CommonModule,
    RouterModule,
    AngularSvgIconModule.forRoot(),
    AngularSvgIconModule,
    PanelModule,
  ],
  exports: [ImageComponent, MachineInfoComponent],
})
export class SharedModule {}
