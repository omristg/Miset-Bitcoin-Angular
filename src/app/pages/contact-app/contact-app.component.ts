import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from "src/app/services/contact.service"

@Component({
  selector: 'contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.scss']
})
export class ContactAppComponent implements OnInit, OnDestroy {

  contacts: Contact[] = []
  subs: Subscription[] = []
  isFilterOn: boolean = false
  constructor(private contactService: ContactService) { }


  ngOnInit(): void {
    this.contactService.loadContacts()
    this.subs[this.subs.length] = this.contactService.contacts$.subscribe(contacts => {
      this.contacts = contacts
    })
  }

  onRemove(contactId: string) {
    this.contactService.deleteContact(contactId)
  }

  onToggleFilter() {
    this.isFilterOn = !this.isFilterOn
  }

  ngOnDestroy(): void {
    this.subs.map(sub => sub.unsubscribe())
  }

}

