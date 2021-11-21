import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcoGuidePageRoutingModule } from './eco-guide-routing.module';

import { EcoGuidePage } from './eco-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcoGuidePageRoutingModule
  ],
  declarations: [EcoGuidePage]
})
export class EcoGuidePageModule {}
