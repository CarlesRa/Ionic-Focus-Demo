import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
	},
	{
		path: 'contacts',
		loadChildren: () => import('./pages/contacts/contacts.module').then( m => m.ContactsPageModule)
	},
  {
    path: 'new',
    loadChildren: () => import('./pages/new-contact/new-contact.module').then( m => m.NewContactPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./pages/edit/edit.module').then( m => m.EditPageModule)
  },
	//Other paths will go here.
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
