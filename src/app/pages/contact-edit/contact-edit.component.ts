import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  contact: Contact
  title: string = ''

  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }



  ngOnInit(): void {
    this.route.params.subscribe(async ({ id }) => {
      this.contact = id ? await this.contactService.getContactById(id).toPromise() :
        this.contactService.getEmptyContact() as Contact
    })
  }

  async onSaveContact() {
    await this.contactService.saveContact(this.contact)
    this.router.navigateByUrl('/contact')

  }

}
