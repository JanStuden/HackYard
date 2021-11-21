import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { GardenService } from '../service/garden.service';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {

  userForm: FormGroup;
  private id: string;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private gardenService: GardenService,
  ) {
    Storage.get({ key: 'id' }).then((id) => {
      this.id = id.value
    })
  }

  addGarden() {
    if (this.id == null) {
      this.gardenService.createGarden().subscribe((response) => {
        if (response != null) {
          this.zone.run(() => {
            Storage.set({ key: 'id', value: response._id })
            this.router.navigate(['/home']);
          })
        } else {
          console.log('No garden found')
        }
      })
    }else{
      this.router.navigate(['/home']);
    }
    
  }
}
