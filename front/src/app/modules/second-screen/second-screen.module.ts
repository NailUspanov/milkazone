import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SecondScreenComponent } from './components/second-screen.component';
import { SecondRoutingModule } from './second-screen.routing';
import { TabViewModule } from 'primeng/tabview';
import { NgModule } from '@angular/core';
import { GraphComponent } from './components/graph/graph.component';
import { PanelModule } from 'primeng/panel';
import { ChartModule } from 'primeng/chart';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { TreeModule } from 'primeng/tree';

@NgModule({
  declarations: [SecondScreenComponent, GraphComponent],
  imports: [
    CommonModule,
    SharedModule,
    SecondRoutingModule,
    TabViewModule,
    PanelModule,
    FormsModule,
    ChartModule,
    AccordionModule,
    CheckboxModule,
    TreeModule,
  ],
})
export class SecondModule {}
