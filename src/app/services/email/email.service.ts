import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from 'src/app/models/email.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

	readonly BASE_URL = "http://focus360def.herokuapp.com/email/send"

	constructor(private httpClient: HttpClient) { }
	
	sendMail(email: Email) {

		const httpHeader = {
			headers: new HttpHeaders({'Content-Type' : 'application/json',
			'Access-Control-Allow-Origin': '*'})
		};
		console.log(JSON.stringify(email));
		
		return this.httpClient.post<Email>(this.BASE_URL, /* JSON.stringify(email) */ email, httpHeader);
	}
}
