import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFirstScreenComponent } from './components/edit-first-screen/edit-first-screen.component';
import { FirstScreenComponent } from './components/first-screen.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: FirstScreenComponent },
      { path: ':id', component: EditFirstScreenComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstRoutingModule {}
