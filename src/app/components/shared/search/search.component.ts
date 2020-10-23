import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { createAnimation } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

	@Output() sendSearchEvent = new EventEmitter();
	@Output() pressedCancelButton = new EventEmitter();

	

  constructor() { }

	ngOnInit() {}
	
	getItems(event) {
		this.sendSearchEvent.emit(event);
	}

	pressedCancel() {
		this.pressedCancelButton.emit(false);
	}
}
