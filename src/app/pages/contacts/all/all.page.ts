import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})
export class AllPage implements OnInit {

	items: string[];
	loader: any;

  constructor(
		private loadingService: LoadingService
	) {}

  ngOnInit() {

		this.showLoading()
		this.initializeItems();
		
  }

	getItems(event: any) {

		this.initializeItems();
		const val = event.target.value;

		if (val && val.trim() != '') {
			this.items = this.items.filter((item) => {
				return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
			});
		}
	}

	initializeItems() {

		setTimeout(() => {
			this.items = [
				'Amsterdam',
				'Viena',
				'Paris',
				'Madrid',
				'Amsterdam',
				'Viena',
				'Paris',
				'Madrid',
				'Amsterdam',
				'Viena',
				'Paris',
				'Madrid'
			].sort();
			this.loadingService.hideLoading();
		}, 2000);
	}
	
	async showLoading() {
		this.loader = this.loadingService.showLoading('Cargando...');
	}
}


