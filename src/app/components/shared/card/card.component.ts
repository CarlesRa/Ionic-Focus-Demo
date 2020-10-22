import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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

  constructor(
		private contactsService: ContactsService,
		private alertControler: AlertController,
		private router: Router
	) { }

	ngOnInit() {}

	viewDetailContact(contact: any) {
		console.log(contact);
	} 
	
	updateContact() {

		console.log('send message');
		
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
						this.contactsService.deleteContact(contactId).then(() => {
							this.contactoBorrado.emit();
						})
						.catch(() => {
							console.error('Error al eliminar el contacto');
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

	getInitials(contact: Contact): string {
		return contact.firstName.charAt(0) + 
					 contact.lastName.charAt(0);
	}

	showDetail(id: number) {
		this.router.navigate(['contacts','detail', id])
	}

}
