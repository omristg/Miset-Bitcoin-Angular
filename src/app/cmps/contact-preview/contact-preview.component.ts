import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { filter, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { FilterBy } from 'src/app/models/filter-by';
import { ContactService } from 'src/app/services/contact.service';


@Component({
	selector: 'contact-preview',
	templateUrl: './contact-preview.component.html',
	styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit, OnDestroy {

	subs: Subscription[] = []
	filterBy: FilterBy | null = null

	constructor(private contactService: ContactService) { }

	@Input() contact: Contact
	@Output() remove = new EventEmitter

	ngOnInit(): void {

		this.subs[this.subs.length] = this.contactService.filterBy$.subscribe(filterBy => {
			this.filterBy = filterBy
		})
	}

	ngOnDestroy(): void {
		this.subs.map(sub => sub.unsubscribe())
	}
}
