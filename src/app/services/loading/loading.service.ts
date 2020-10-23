import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
	loading;
  constructor(
		public loadingCtrl: LoadingController
	) { }

	async showLoading(message: string) {
		this.loading = await this.loadingCtrl.create({
			message: message
		});
		this.loading.present();
		return this.loading;
	}

	async showLoadingToggle(message: string) {
		this.loading = await this.loadingCtrl.create({
			message: message,
			duration: 2000
		});
	}

	hideLoading() {
		this.loading.dismiss();
	}
}
