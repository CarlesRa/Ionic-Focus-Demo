import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ContactType } from 'src/app/enums/type.enum';
import { Contact } from 'src/app/models/contact.model';
import { AlertService } from 'src/app/services/alert/alert.service';
import { ContactsService } from 'src/app/services/contacts/contacts.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

	@Input()contact: Contact;
	@Input() title: string;
	@Input() subTitle: string;
	@Input() textBtn: string;
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
			
			if (this.contact) {			
				this.updateContact();
			}
			else{
				this.createContact();
			}
		}
	}

	createContact() {

		const contact: Contact = new Contact(
			this.firstName, this.lastName, this.email,
			this.phone, this.city, this.country, this.contactType
		);

		this.contactsService.createContact(contact).subscribe(() => {
			this.loadingService.hideLoading();
			this.alertService.presentAlert('Operación realizada satisfactoriamente!!');
			this.navCtrl.navigateRoot(['/contacts']);
		},
		() => {
			this.loadingService.hideLoading();
			this.alertService.presentAlert('Error en la operación');
			this.router.navigate(['contacts']);
		});
	}

	updateContact() {

		const contact: Contact = new Contact(
			this.firstName, this.lastName, this.email,
			this.phone, this.city, this.country, this.contactType
		);

		this.contactsService.updateContact(this.contact.id, contact).subscribe(() => {
			this.loadingService.hideLoading();
			this.alertService.presentAlert('Operación realizada satisfactoriamente!!');
			this.navCtrl.navigateRoot(['/contacts']);
		},
		() => {
			this.loadingService.hideLoading();
			this.alertService.presentAlert('Error en la operación');
			this.router.navigate(['contacts']);
		});
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

		});
		if (this.contact) {
			this.fillForm();
		}
	}

	fillForm() {
		this.firstName = this.contact.firstName;
		this.lastName = this.contact.lastName;
		this.email = this.contact.email;
		this.phone = this.contact.phone;
		this.city = this.contact.city;
		this.country = this.contact.country;
		this.contactType = this.contact.contactType;
	}

}
