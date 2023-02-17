import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SecondScreenComponent } from './components/second-screen.component';
import { SecondRoutingModule } from './second-screen.routing';

@NgModule({
  declarations: [SecondScreenComponent],
  imports: [SharedModule, SecondRoutingModule],
})
export class SecondModule {}
