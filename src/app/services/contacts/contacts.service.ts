import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

	readonly BASE_URL = "http://localhost:3000/contacts";

  constructor(
		private httpClient: HttpClient
	) { }


	getAll() {
		return this.httpClient.get(this.BASE_URL);		
	}

	getContactById(contactId: any) {
		return this.httpClient.get(`${this.BASE_URL}/contact/${contactId}`)
	}

	getClients() {
		
		return this.httpClient.get(`${this.BASE_URL}/clients`);
	}

	getFriends() {

		return this.httpClient.get(`${this.BASE_URL}/friends`);
	}

	getEmployees() {
		return this.httpClient.get(`${this.BASE_URL}/employees`);
	}

	createContact(contact: Contact) {

		const httpHeader = {
			headers: new HttpHeaders({'Content-Type' : 'application/json',
			'Access-Control-Allow-Origin': '*'})
		};

		return this.httpClient.post<Contact>(`${this.BASE_URL}/create`, 
												                 contact, httpHeader)
	}

	deleteContact(contactId: number) {
		
		return this.httpClient.delete(`${this.BASE_URL}/delete/${contactId}`);
	}
}
