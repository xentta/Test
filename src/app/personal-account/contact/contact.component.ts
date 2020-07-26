import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Contact} from '../../interface';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    nameEdit = '';
    phoneEdit = null;
    editID = null;
    toggle = false;
    @Input() contact: Contact;
    @Output() onRemove = new EventEmitter<number>();
    @Output() onUpdate = new EventEmitter<Contact>();

    removeContact() {
        this.onRemove.emit(this.contact.id);
    }

    editContact() {
        this.toggle = true;
        this.nameEdit = this.contact.name;
        this.phoneEdit = this.contact.phone;
        this.editID = this.contact.id;
    }

    updateContact() {
        if (this.nameEdit.trim() && this.phoneEdit.trim()) {
            const contact: Contact = {
                name: this.nameEdit,
                phone: this.phoneEdit,
                id: this.editID
            };

            this.onUpdate.emit(contact);
            this.toggle = false;
        }
    }
}

