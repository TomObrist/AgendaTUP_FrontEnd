import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsListRoutingModule } from './contacts-list-routing.module';
import { ContactsListComponent } from './contacts-list.component';

import { NavbarComponent } from '../../components/contactList-navbar/navbar.component';
import { ContactListListComponent } from '../../components/contactList-list/contact-list-list.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactListCardComponent } from '../../components/contact-list-card/contact-list-card.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ContactsListComponent,
    NavbarComponent,
    ContactListListComponent,
    ContactListCardComponent
  ],
  imports: [
    CommonModule,
    ContactsListRoutingModule,
    FontAwesomeModule,
    NgbModule
  ]
})
export class ContactsListModule { }
