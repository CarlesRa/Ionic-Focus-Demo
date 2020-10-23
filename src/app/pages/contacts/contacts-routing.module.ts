import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsPage } from './contacts.page';

const routes: Routes = [
  {
    path: 'tabs',
		component: ContactsPage,
		children: [
			{
				path: 'all',
				children: [
					{
						path: '',
						loadChildren: () => import('./all/all.module').then( m => m.AllPageModule)
					}
				]	
			},
			{
				path: 'clients',
				children: [
					{
						path: '',
						loadChildren: () => import('./clients/clients.module').then( m => m.ClientsPageModule)
					}
				]
			},
			{
				path: 'employees',
				children: [
					{
						path: '',
						loadChildren: () => import('./employees/employees.module').then( m => m.EmployeesPageModule)
					}
				]
			},
			{
				path: 'friends',
				children: [
					{
						path: '',
						loadChildren: () => import('./friends/friends.module').then( m => m.FriendsPageModule)
					}
				]
			},
			{
				path: '',
				redirectTo: '/contacts/tabs/all',
				pathMatch: 'full'
			}
		]
	},
	{
		path: '',
		redirectTo: '/contacts/tabs/all',
		pathMatch: 'full'
	},
  {
    path: 'detail/:id',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'send/:id',
    loadChildren: () => import('./send-email/send-email.module').then( m => m.SendEmailPageModule)
	},
	{
		path: 'new',
		loadChildren: () => import('./new-contact/new-contact.module').then( m => m.NewContactPageModule)
	},
	//will go other routes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsPageRoutingModule {}
