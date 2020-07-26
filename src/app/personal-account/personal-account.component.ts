import {Component} from '@angular/core';
import {Contact} from '../interface';


@Component({
    selector: 'app-personal-account',
    templateUrl: './personal-account.component.html',
    styleUrls: ['./personal-account.component.scss']
})
export class PersonalAccountComponent {
    search = ''
    contacts: Contact[] = [
        {id: 1, name: 'Владимир', phone: '+79513105251'},
        {id: 2, name: 'Татьяна', phone: '+795133159652'}
    ];

    updateContact(contact: Contact) {
        this.contacts.push(contact);
    }

    removeContact(id: number) {
        this.contacts = this.contacts.filter(c => c.id !== id);
    }

    update(contact: Contact) {
        this.contacts = this.contacts.filter(c => c.id !== contact.id);
        this.contacts.push(contact);
        this.contacts = this.contacts.sort((a, b) => a.id - b.id);
    }
}
