import {Pipe, PipeTransform} from '@angular/core';
import {Contact} from './interface';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(contacts: Contact[], search = ''): Contact[] {
        if (!search.trim()) {
            return contacts;
        }
        return contacts.filter((contact) => {
            return contact.name.includes(search);
        });
    }

}
