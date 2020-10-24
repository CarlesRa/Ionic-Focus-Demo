import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { ContactType } from 'src/app/enums/type.enum';
import { Contact } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/services/contacts/contacts.service';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.page.html',
	styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

	contact: Contact;
	mostrar = false;
	id: any;
	initials: string;

	constructor(
		private aRoute: ActivatedRoute,
		private contactsService: ContactsService,
		private router: Router,
		private navCtrl: NavController,
		private alertCtrl: AlertController
	) {

		this.id = this.aRoute.snapshot.paramMap.get('id');

		this.contactsService.getContactById(this.id).
			subscribe((contact: Contact) => {
				this.contact = contact;
				this.initials = this.getInitials();
				this.mostrar = true;
			});
	}

	ngOnInit() { }

	getInitials(): string {
		return this.contact.firstName.charAt(0) +
			this.contact.lastName.charAt(0);
	}

	sendMail() {
		this.router.navigate(['contacts', 'send', this.contact.id])
	}

	async deleteContact(contactId) {
		console.log('entra delete');
		console.log(contactId);
		
		const alert = await this.alertCtrl.create({
			header: 'Borrar Contacto',
			subHeader: '¿Desea eliminar el contacto permanentemente?',
			message: 'esta operación es definitiva....',
			buttons: [
				{
					text: 'SÍ',
					role: 'success',
					handler: () => {
						this.contactsService.deleteContact(contactId).subscribe(() => {
							console.log('intente eliminar');
							this.navCtrl.navigateRoot(['/contacts']);
						},
							() => {
								console.log('error al eliminar....');

							});
					}
				},
				{
					text: 'NO',
					role: 'cancel'
				}
			]
		});
		alert.present();
	}
}
