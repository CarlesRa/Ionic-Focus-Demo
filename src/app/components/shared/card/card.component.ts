import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Contact } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/services/contacts/contacts.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

	@Input() contactos: Contact[];
	@Output() contactoBorrado = new EventEmitter();
	@Output() sinContactos = new EventEmitter();

  constructor(
		private contactsService: ContactsService,
		private alertControler: AlertController,
		private navCtrl: NavController,
	) {}

	ngOnInit() {
		
		setTimeout(() => {
			this.comprobarContactos();
		},1000);
	}

	async removeContact(contactId: number) {

		const alert = await this.alertControler.create({
      header: 'Borrar Contacto',
			subHeader: '¿Desea eliminar el contacto permanentemente?',
			message: 'esta operación es definitiva....',
      buttons: [
				{
					text: 'SÍ',
					role: 'success',
					handler: () => {
						this.contactsService.deleteContact(contactId).subscribe(() => {
							this.contactoBorrado.emit();
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

	updateContact(contactId: number) {
		this.navCtrl.navigateRoot(['contacts','edit', contactId]);
	}

	getInitials(contact: Contact): string {
		return contact.firstName.charAt(0) + 
					 contact.lastName.charAt(0);
	}

	showDetail(id: number) {
		this.navCtrl.navigateRoot(['/contacts','detail', id])
	}

	comprobarContactos() {

		if (this.contactos.length <= 0) {

			this.sinContactos.emit(true);
		}
		else 
			this.sinContactos.emit(false);
	}

}
