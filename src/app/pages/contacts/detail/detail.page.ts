import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
	id;

  constructor(
		private aRoute: ActivatedRoute
	) { }

  ngOnInit() {

		this.id = this.aRoute.snapshot.paramMap.get('id');
		console.log('id: ' + this.id);
		
  }

}
