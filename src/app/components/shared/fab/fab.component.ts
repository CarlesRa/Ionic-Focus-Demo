import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
})
export class FabComponent implements OnInit {

  constructor(
		private navCtrl: NavController
	) { }

	ngOnInit() {}
	
	addContact() {
		this.navCtrl.navigateRoot(['/contacts', 'new'])
		
	}

	updateContact() {
		console.log('update');
		
	}

	removeContact() {
		console.log('remove contact');
		
	}

}
