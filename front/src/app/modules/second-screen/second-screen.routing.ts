import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondScreenComponent } from './components/second-screen.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: SecondScreenComponent }],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondRoutingModule {}
