import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { AlertController } from '@ionic/angular';
import { GardenService, Plant } from '../service/garden.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  private id: string
  public plants: Array<Plant>;
  public beePlants: number = 0;

  constructor(
    public alertController: AlertController,
    private gardenService: GardenService
  ) {
    Storage.get({ key: 'id' }).then((id) => {
      this.id = id.value
    })
  }

  ionViewWillEnter() {
    this.getPlants()
  }

  private getPlants() {
    this.gardenService.getGarden(this.id).subscribe((response) => {
      this.plants = response.plantArray

      this.getBeeFriendlyPlants()
    })
  }

  private getBeeFriendlyPlants() {
    this.gardenService.getBeeFriendlyPlants(this.id).subscribe((response) => {
      console.log(response)

      this.beePlants = response.plantArray.length
    }
    )
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK'],
    });

    await alert.present();
    let result = await alert.onDidDismiss();
  }
}
