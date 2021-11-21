import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantViewPageRoutingModule } from './plant-view-routing.module';

import { PlantViewPage } from './plant-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantViewPageRoutingModule
  ],
  declarations: [PlantViewPage]
})
export class PlantViewPageModule {}
