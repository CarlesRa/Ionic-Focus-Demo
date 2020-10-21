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
    path: 'employees',
    loadChildren: () => import('./employees/employees.module').then( m => m.EmployeesPageModule)
  },
	//will go other routes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsPageRoutingModule {}
