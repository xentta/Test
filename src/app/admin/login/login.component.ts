import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    check = true;
    message = false;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.form = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])\\S{6,}')]),
        });
    }

    submit() {
        const key = this.form.value.email;
        if (localStorage.getItem(key) !== null) {
            setTimeout(() => this.router.navigate(['', 'personal-acc']), 1500);
        } else {
            this.message = true;
            setTimeout(() => this.router.navigate(['']), 3500);
        }
    }
}
