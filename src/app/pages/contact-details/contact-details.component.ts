import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  contact: Contact
  subscription: Subscription
  subs: Subscription[] = []

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService,
    private bitcoinService: BitcoinService
  ) { }

  ngOnInit(): void {
    this.subs[this.subs.length] = this.route.params.subscribe(async params => {
      this.contact = await this.contactService.getContactById(params['id']).toPromise()
    })
  }

  onGoBack() {
    this.router.navigateByUrl('contact')
  }

  ngOnDestroy(): void {
    this.subs.map(sub => sub.unsubscribe())
  }

}
