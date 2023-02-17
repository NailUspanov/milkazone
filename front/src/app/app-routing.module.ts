import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from './core/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: CommonLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'first-screen',
        pathMatch: 'full',
      },
      {
        path: 'first-screen',
        loadChildren: () =>
          import('./modules/fisrt-screen/fisrt-screen.module').then(
            (m) => m.FisrtModule
          ),
      },
      {
        path: 'second-screen',
        loadChildren: () =>
          import('./modules/second-screen/second-screen.module').then(
            (m) => m.SecondModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
