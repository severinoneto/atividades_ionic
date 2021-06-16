import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivertidosPage } from './divertidos.page';

const routes: Routes = [
  {
    path: '',
    component: DivertidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DivertidosPageRoutingModule {}
