import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { PanelModule } from 'primeng/panel';
import { BaeringInfoComponent } from './compoents/bearing-info/baering-info.component';
import { PropertyBearingComponent } from './compoents/bearing-info/property-bearing/property-bearing.component';
import { ImageComponent } from './compoents/form/image/image.component';
import { MachineInfoComponent } from './compoents/machine-info/machine-info.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressBarComponent } from './compoents/progress-bar/progress-bar.component';
import { ExhausterInfoComponent } from './compoents/machine-info/exhauster-info/exhauster-info.component';
import { DividerModule } from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';
import { CalendarModule } from 'primeng/calendar';
import { DatepickerComponent } from './compoents/form/datepicker/datepicker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ImageComponent,
    MachineInfoComponent,
    BaeringInfoComponent,
    PropertyBearingComponent,
    ProgressBarComponent,
    ExhausterInfoComponent,
    DatepickerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularSvgIconModule.forRoot(),
    AngularSvgIconModule,
    PanelModule,
    ProgressBarModule,
    DividerModule,
    AccordionModule,
    CalendarModule,
    FormsModule,
  ],
  exports: [
    ImageComponent,
    MachineInfoComponent,
    BaeringInfoComponent,
    ProgressBarComponent,
    ExhausterInfoComponent,
    DatepickerComponent,
  ],
})
export class SharedModule {}
