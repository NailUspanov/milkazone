import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SecondScreenComponent } from './components/second-screen.component';
import { SecondRoutingModule } from './second-screen.routing';
import { TabViewModule } from 'primeng/tabview';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [SecondScreenComponent],
  imports: [CommonModule, SharedModule, SecondRoutingModule, TabViewModule],
})
export class SecondModule {}
