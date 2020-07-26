import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../interface';
import {Router} from '@angular/router';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    form: FormGroup;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.form = new FormGroup({
                name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
                email: new FormControl(null, [Validators.required, Validators.email]),
                password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])\\S{6,}')])
            }
        );
    }

    submit() {
        if (this.form.invalid) {
            return;
        }
        const user: User = this.form.value;

        const keyName = this.form.value.email;
        const userJson = JSON.stringify(user);

        localStorage.setItem(keyName, userJson);

        const consoleLog = localStorage.getItem(keyName);
        console.log(consoleLog);

        this.form.reset();

        setTimeout(() => this.router.navigate(['', 'registration-success']), 2000);
        setTimeout(() => this.router.navigate(['', 'login']), 6000);
    }
}
