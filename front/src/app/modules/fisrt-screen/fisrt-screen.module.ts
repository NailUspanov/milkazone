import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FirstScreenComponent } from './components/first-screen.component';
import { FirstRoutingModule } from './fisrt-screen.routing';

@NgModule({
  declarations: [FirstScreenComponent],
  imports: [SharedModule, FirstRoutingModule],
})
export class FisrtModule {}
