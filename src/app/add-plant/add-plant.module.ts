import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPlantPageRoutingModule } from './add-plant-routing.module';

import { AddPlantPage } from './add-plant.page';
import { GardenService } from '../service/garden.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPlantPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddPlantPage]
})
export class AddPlantPageModule {}
