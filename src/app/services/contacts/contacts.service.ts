import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

	getClients() {
		
		return this.httpClient.get(this.BASE_URL + '/clients');
	}

	getFriends() {

		return this.httpClient.get(this.BASE_URL + '/friends');
	}

	getEmployees() {

		return this.httpClient.get(this.BASE_URL + '/employees');
	}

	async deleteContact(contactId: number): Promise<any> {

		console.log(`${this.BASE_URL}/delete/${contactId}`);
		
		return this.httpClient.delete(`${this.BASE_URL}/delete/${contactId}`).subscribe((res) => console.log(res));
	}
}
