import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Contact } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/services/contacts/contacts.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

	contact: Contact;
	id: any;
	mostrar = false;
	title = "Editar Contacto";
	subtitle = "Actualice su contacto";
	textBtn = "Actualizar";

  constructor(
		private contactsService: ContactsService,
		private navCtrl: NavController,
		private aRoute: ActivatedRoute,
	) { 
		this.id = aRoute.snapshot.paramMap.get('id');
		this.contactsService.getContactById(this.id)
												.subscribe((contact: Contact) => {

			this.contact = contact;
			this.mostrar = true;
		});
	}

  ngOnInit() {
	}



}
