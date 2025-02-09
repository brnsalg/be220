import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToolboxService {
  constructor(private alertController: AlertController) {}

  async alert(header: string, message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Ok'],
    });

    await alert.present();
  }
}
