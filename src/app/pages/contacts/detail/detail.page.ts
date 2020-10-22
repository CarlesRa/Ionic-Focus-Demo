import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
	id: any;
	initials: string;
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	city: string;
	country: string;
	contactType: ContactType;

  constructor(
		private aRoute: ActivatedRoute,
		private contactsService: ContactsService
	) { }

  ngOnInit() {
		this.id = this.aRoute.snapshot.paramMap.get('id');

		this.contactsService.getContactById(this.id).
			subscribe((contact:Contact) => {
				this.contact = contact;
				console.log(this.contact);
				this.initials = this.getInitials();
				this.initVariables(this.contact);
			});
	}

	initVariables(contact: Contact) {
		this.firstName = contact.firstName;
		this.lastName = contact.lastName;
		this.phone = contact.phone;
		this.email = contact.email;
		this.city = contact.city;
		this.country = contact.country;
		this.contactType = contact.contactType;
	}
	
	getInitials(): string {
		return this.contact.firstName.charAt(0) + 
					 this.contact.lastName.charAt(0);
	}

}
