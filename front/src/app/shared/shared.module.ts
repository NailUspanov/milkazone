import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { PanelModule } from 'primeng/panel';
import { BaeringInfoComponent } from './compoents/bearing-info/baering-info.component';
import { PropertyBearingComponent } from './compoents/bearing-info/property-bearing/property-bearing.component';
import { ImageComponent } from './compoents/form/image/image.component';
import { MachineInfoComponent } from './compoents/machine-info/machine-info.component';

@NgModule({
  declarations: [
    ImageComponent,
    MachineInfoComponent,
    BaeringInfoComponent,
    PropertyBearingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularSvgIconModule.forRoot(),
    AngularSvgIconModule,
    PanelModule,
  ],
  exports: [ImageComponent, MachineInfoComponent, BaeringInfoComponent],
})
export class SharedModule {}
