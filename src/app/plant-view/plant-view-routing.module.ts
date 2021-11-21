import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantViewPage } from './plant-view.page';

const routes: Routes = [
  {
    path: '',
    component: PlantViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantViewPageRoutingModule {}
