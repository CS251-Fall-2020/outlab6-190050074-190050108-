import { Component, OnInit } from '@angular/core';
import { Contact } from  '../Contact';
import { CONTACTS } from '../mock-contacts';

@Component({
  selector: 'app-contact_page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  title = 'To contact us:';

  contacts = CONTACTS;

  constructor() { }

  ngOnInit(): void {
  }

}
