import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToolboxService {
  loading: any;

  constructor(
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  async alert(header: string, message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Ok'],
    });

    await alert.present();
  }

  async startLoading(): Promise<void> {
    this.loading = await this.loadingController.create();
    this.loading.present();
  }

  async stopLoading(): Promise<void> {
    if (this.loading) this.loading.dismiss();
  }
}
