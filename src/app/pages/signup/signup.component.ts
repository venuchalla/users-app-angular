import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { finalize } from 'rxjs';




function passwordsMatch(
  control: AbstractControl
): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirm = control.get('confirmPassword')?.value;

  return password === confirm
    ? null
    : { passwordMismatch: true };
}

@Component({
  selector: 'app-signup',
  imports: [
     CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  readonly roles = [
  { value: 'user', label: 'User' },
  { value: 'mod', label: 'Moderator' },
  { value: 'admin', label: 'Admin' }
];

   private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly loading = signal(false);
  readonly hidePassword = signal(true);
  readonly errorMessage = signal('');

  readonly signupForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [
      Validators.required,
      Validators.minLength(8)
    ]],
    confirmPassword: ['', Validators.required],
    role: ['user', Validators.required]
  }, {
    validators: passwordsMatch
  });

  signUp(): void {
    if (this.signupForm.invalid || this.loading()) {
      this.signupForm.markAllAsTouched();
      return;
    }

   const { email, username, password, role } =
  this.signupForm.getRawValue();

    this.loading.set(true);
    this.errorMessage.set('');

    this.authService.signup({
      email,
      username,
      password,
      role: [role]
    }).pipe(
      finalize(() => this.loading.set(false))
    ).subscribe({
      next: () => {
        void this.router.navigate(['/login'], {
          state: { registrationSuccess: true }
        });
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 409) {
          this.errorMessage.set(
            'Email or username already exists.'
          );
        } else {
          this.errorMessage.set(
            'Registration failed. Please try again.'
          );
        }
      }
    });
  }

}
