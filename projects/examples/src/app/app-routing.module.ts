import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./main-form/main-form.module')
      .then(m => m.MainFormModule)
  },
  {
    path: 'double-routing',
    loadChildren: () => import('./double-routing/double-routing.module')
      .then(m => m.DoubleRoutingModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
