import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
	loading: any;
  constructor(
		private loadingCtrl: LoadingController
	) { }

	async showLoading(message: string) {
		this.loading = await this.loadingCtrl.create({
			message: message
		});
		this.loading.present();
	}

	hideLoading() {
		this.loading.dismiss();
	}
}
