export class ContactModel {
  firstName: string;
  lastName: string;
  email: string;
}

export class ContactListModel {
  data: ContactModel[];
  page: number;
  total: number;
}
