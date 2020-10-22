import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/services/contacts/contacts.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

	contacts: Contact[];
	mostrarLabel: boolean;

  constructor(
		private loadingService: LoadingService,
		private contactsService: ContactsService
	) { }

  ngOnInit() {
		this.initializeItems();
  }

	getItems(event: any) {

		const val = event.target.value;

		if (val && val.trim() != '') {
			this.contacts = this.contacts.filter((item) => {
				return (item.firstName.toLowerCase().indexOf(val.toLowerCase()) > -1);
			});
		}
		else {
			this.initializeItems();
		}
	}

	initializeItems() {

		const loader = this.loadingService.showLoading('Espere por favor...')
		.then(() => {
				this.contactsService.getFriends().subscribe((contacts: Contact[]) => {
				this.contacts = contacts.sort((a, b) => a.firstName < b.firstName ? -1 : 1);
				this.loadingService.hideLoading();	
			},
			() => {
				console.error('error en la petición');
				
			});
		})
	}
}
