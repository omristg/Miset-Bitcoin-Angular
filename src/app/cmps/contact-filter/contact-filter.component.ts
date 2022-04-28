import { Component, OnInit } from '@angular/core';
import { FilterBy } from 'src/app/models/filter-by';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  filterBy: FilterBy = {
    name: '',
    email: '',
    phone: ''
  }

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  onSetFilterBy() {
    this.contactService.setFilterBy(this.filterBy)

  }


}
