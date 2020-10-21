import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './shared/card/card.component';
import { IonicModule } from '@ionic/angular';
import { FabComponent } from './shared/fab/fab.component';



@NgModule({
  declarations: [
		CardComponent,
		FabComponent,
	],
  imports: [
		CommonModule,
		IonicModule,
	],
	exports: [
		CardComponent,
		FabComponent
	]
})
export class ComponentsModule { }
