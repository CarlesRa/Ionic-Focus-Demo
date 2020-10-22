import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
})
export class FabComponent implements OnInit {

  constructor(
		private router: Router
	) { }

	ngOnInit() {}
	
	addContact() {
		this.router.navigate(['/new'])
		
	}

	updateContact() {
		console.log('update');
		
	}

	removeContact() {
		console.log('remove contact');
		
	}

}
