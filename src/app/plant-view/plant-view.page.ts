import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GardenService } from '../service/garden.service';

@Component({
  selector: 'app-plant-view',
  templateUrl: './plant-view.page.html',
  styleUrls: ['./plant-view.page.scss'],
})
export class PlantViewPage {

  record: any
  name: any
  description: any
  found: boolean = false

  constructor(private gardenService: GardenService, private activatedRoute: ActivatedRoute) {
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
  }

  ionViewWillEnter() {
    this.gardenService.getPlantRecord(this.name).subscribe((record) => {
      if (record) {
        this.found = true
        this.record = record
        this.description = record.description
      }
    })
  }

}
