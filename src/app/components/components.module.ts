import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './shared/card/card.component';
import { IonicModule } from '@ionic/angular';
import { FabComponent } from './shared/fab/fab.component';
import { SearchComponent } from './shared/search/search.component';



@NgModule({
  declarations: [
		CardComponent,
		FabComponent,
		SearchComponent
	],
  imports: [
		CommonModule,
		IonicModule,
	],
	exports: [
		CardComponent,
		FabComponent,
		SearchComponent
	]
})
export class ComponentsModule { }
