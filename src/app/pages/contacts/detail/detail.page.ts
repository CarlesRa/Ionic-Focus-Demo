import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Contact } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/services/contacts/contacts.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

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
		private alertCtrl: AlertController,
		private loadingService: LoadingService
	) {

		this.id = this.aRoute.snapshot.paramMap.get('id');
		this.loadingService.showLoading('Cargando información...')
		this.contactsService.getContactById(this.id).
			subscribe((contact: Contact) => {
				this.contact = contact;
				this.initials = this.getInitials();
				this.mostrar = true;
				this.loadingService.hideLoading();
			});
	}

	ngOnInit() { }

	getInitials(): string {
		return this.contact.firstName.charAt(0) +
			this.contact.lastName.charAt(0);
	}

	editContact() {
		this.navCtrl.navigateRoot(['contacts','edit',this.contact.id]);
	}

	sendMail() {
		this.router.navigate(['contacts', 'send', this.contact.id])
	}

	async deleteContact() {
		
		const alert = await this.alertCtrl.create({
			header: 'Borrar Contacto',
			subHeader: '¿Desea eliminar el contacto permanentemente?',
			message: 'esta operación es definitiva....',
			buttons: [
				{
					text: 'SÍ',
					role: 'success',
					handler: () => {
						this.contactsService.deleteContact(this.contact.id).subscribe(() => {
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
