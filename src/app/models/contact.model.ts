import { ContactType } from '../enums/type.enum';

export class Contact {

	constructor(
		public id: number,
		public firstName: string,
		public lastName: string,
		public email: string,
		public phone: string,
		public city: string,
		public country: string,
		public contactType: ContactType
	){}

}