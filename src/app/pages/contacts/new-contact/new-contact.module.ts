import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewContactPageRoutingModule } from './new-contact-routing.module';

import { NewContactPage } from './new-contact.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
		NewContactPageRoutingModule,
		ReactiveFormsModule,
		ComponentsModule
  ],
  declarations: [NewContactPage]
})
export class NewContactPageModule {}
