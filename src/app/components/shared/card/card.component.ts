import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

	@Input() contactos: Contact[];

  constructor() { }

	ngOnInit() {}

	viewDetailContact(contact: any) {
		console.log(contact);
	} 
	
	updateContact() {

		console.log('send message');
		
	}

	removeContact(contact: any) {
		console.log('Removing contact...');
		
	}

}
