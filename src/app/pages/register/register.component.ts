import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup = new FormGroup({});
    errorMessage!: string;

    constructor(private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router) { }

    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.maxLength(20)]],
            email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(120)]]
        });
    }

    register() {
        if (this.registerForm.valid) {
            const { username, email, password } = this.registerForm.value;
            this.authService.register(username, email, password)
                .subscribe({
                    next: (response) => {
                        this.router.navigate(['/auth/login']);
                    },
                    error: (error) => {
                        console.log(error);
                        if (error.status === 400 && error.error && error.error.message) {
                            this.errorMessage = error.error.message;
                        } else {
                            this.errorMessage = "An unexpected error occurred. Please try again later.";
                        }
                    }
                });
        } else {
            this.registerForm.markAllAsTouched();
        }
    }
}
