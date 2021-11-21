import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { AlertController } from '@ionic/angular';
import { GardenService } from '../service/garden.service';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.page.html',
  styleUrls: ['./add-plant.page.scss'],
})
export class AddPlantPage implements OnInit {


  plantForm: FormGroup

  private id: string

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private gardenService: GardenService,
    private zone: NgZone,
    private alertController: AlertController) {
    this.plantForm = this.formBuilder.group({
      name: [''],
      amount: [''],
      age: [''],
      position: [''],
      light: ['']
    })

    Storage.get({key: 'id'}).then((id) => {
      this.id = id.value
      console.log(this.id)
    })
  }

  ngOnInit() {
  }

  addPlant(){
    console.log(this.plantForm.value)
    this.gardenService.addPlant(this.plantForm.value, this.id).subscribe((response) =>{
      if(response != null){
        this.zone.run(() => {
          this.plantForm.reset();
          this.presentAlert("Record planted in our database.")
          this.router.navigate(['/home']);
        })
      }else {
        console.log('Plant not added')
      }
    })
  }

  async presentAlert(message:string) {
    const alert = await this.alertController.create({
      header: message,
      buttons: ['Got it'],
    });
  
    await alert.present();
  }
}
