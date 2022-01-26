import { ContactListModel, ContactModel } from './../model/contact.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  addContactApi = 'https://reqres.in/api/users ';
  getContactApi = 'https://reqres.in/api/users';
  constructor(private httpClient: HttpClient) {}

  addContact(param): Observable<ContactModel> {
    return this.httpClient.post<ContactModel>(this.addContactApi, param);
  }

  getContactList(): Observable<ContactListModel> {
    return this.httpClient.get<ContactListModel>(this.getContactApi);
  }
}
