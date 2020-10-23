import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

	constructor(
		private alertCtrl: AlertController
	) { }
	
	
	async presentAlert(message: string) {
		let alert = this.alertCtrl.create({
			message: message,
			buttons: ['OK']
		});
		(await alert).present();
		}

}
