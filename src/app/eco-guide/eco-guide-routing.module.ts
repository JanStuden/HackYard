import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcoGuidePage } from './eco-guide.page';

const routes: Routes = [
  {
    path: '',
    component: EcoGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcoGuidePageRoutingModule {}
