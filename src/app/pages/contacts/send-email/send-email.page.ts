import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { Email } from 'src/app/models/email.model';
import { ContactsService } from 'src/app/services/contacts/contacts.service';
import { EmailService } from 'src/app/services/email/email.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.page.html',
  styleUrls: ['./send-email.page.scss'],
})
export class SendEmailPage implements OnInit {

	forma: FormGroup
	contact: Contact;
	email: Email;
	id: any;
	mostrar = false;
	mostrarLabel = false;

  constructor(
		private contactsService: ContactsService,
		private aRoute: ActivatedRoute,
		private formBd: FormBuilder,
		private emailService: EmailService
	) { 
		this.id = this.aRoute.snapshot.paramMap.get('id');
		this.email = new Email();
		this.contactsService.getContactById(this.id).
			subscribe((contact:Contact) => {
				this.contact = contact;
				console.log(this.contact);
				this.createForm();
			});
	}

  ngOnInit() {
	}

	comprobarCampo(event) {
		console.log(event);
	}
	
	onSubmit() {

		if (this.forma.valid) {
			this.emailService.sendMail(this.email).subscribe(() => {
				console.log('enviado');
				
			},(err) => {
				console.log('error: ' + err);
				
			})
		}
	}

	createForm() {

		this.forma = this.formBd.group({
			from: ['', [Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
									Validators.required]] ,
			subject: ['', [Validators.required]],
			text: ['', [Validators.minLength(1), Validators.required]]
		});
		this.mostrar = true;
		this.email.to = this.contact.email;
	}

}
