import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Contact} from '../../interface';

@Component({
    selector: 'app-fotm-contact',
    templateUrl: './form-contact.component.html',
    styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent {

    @Output() onAdd = new EventEmitter<Contact>();

    @ViewChild('titleInput', {static: false}) titleRef: ElementRef;

    name = '';
    phone = null;
    id: number;

    addContact() {
        if (this.name.trim() && this.phone.trim()) {
            const post: Contact = {
                name: this.name,
                phone: this.phone,
                id: this.id
            };
            this.onAdd.emit(post);
            this.name = '';
            this.id = this.phone = null;
        }
    }

}
