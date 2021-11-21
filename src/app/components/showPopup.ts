import { Injectable, Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class showPopup {
  constructor(
    private alertCtrl: AlertController,
    private http: HttpClient,
    private router: Router
  ) { }

  //Declears the Popup
  showPopup(title, text) {
    this.alertCtrl.create({
      message: text,
      subHeader: title,
    }).then(alert => alert.present());
  }

  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle for alert',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  receivedPointsPopup() {
    this.alertCtrl.create({
      subHeader: 'Points Popup',
      // message: '<ion-icon name="sunny-outline"></ion-icon>'
    }).then(alert => alert.present());
  }
}