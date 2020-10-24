import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ContactType } from 'src/app/enums/type.enum';
import { Contact } from 'src/app/models/contact.model';
import { AlertService } from 'src/app/services/alert/alert.service';
import { ContactsService } from 'src/app/services/contacts/contacts.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.page.html',
  styleUrls: ['./new-contact.page.scss'],
})
export class NewContactPage implements OnInit {

	forma: FormGroup;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	city: string;
	country: string;
	contactType: ContactType;
	mostrar = true;

  constructor(
		private contactsService: ContactsService,
		private formBd: FormBuilder,
		private loadingService: LoadingService,
		private alertService: AlertService,
		private router: Router,
		private navCtrl: NavController
	) { 

	}

  ngOnInit() {
		this.createForm();
	}
	
	onSubmit() {
		if (this.forma.valid) {

			this.loadingService.showLoading('Guardando Contacto');

			const contact: Contact = new Contact(
				this.firstName, this.lastName, this.email,
				this.phone, this.city, this.country, this.contactType
			);

			this.contactsService.createContact(contact).subscribe(() => {
				this.loadingService.hideLoading();
				this.alertService.presentAlert('Contacto creado satisfactoriamente!!');
				this.navCtrl.navigateRoot(['/contacts']);
			},
			() => {
				this.loadingService.hideLoading();
				this.alertService.presentAlert('Error al crear contacto');
				this.router.navigate(['contacts']);
			});
			
		}
	}
	
	createForm() {
		this.forma = this.formBd.group({
			firstName: ['', [Validators.required]],
			lastName: ['', ],
			email: ['', [Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
									 Validators.required]],
			phone: ['', Validators.required],
			city: ['', ],
			country: [''],
			contactType: ['', Validators.required]

		})
	}


}
