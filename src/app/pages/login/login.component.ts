import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  readonly registrationSuccess =
    history.state?.registrationSuccess === true;
  readonly loading = signal(false);
  readonly hidePassword = signal(true);
  readonly errorMessage = signal('');
  readonly showForgotPassword = signal(false)

  readonly loginForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  signIn(): void {
    if (this.loginForm.invalid || this.loading()) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.errorMessage.set('');

    let email = this.loginForm.get("username")?.value ?? ''
    let password = this.loginForm.get("password")?.value ?? ''

    this.authService.login(
      {
        username: email,
        password: password
      }

    ).pipe(
      finalize(() => this.loading.set(false))
    ).subscribe({
      next: (res) => {
        console.log("Res :", res)
        // Backend authentication/session must be established.
        void this.router.navigate(['/home']);
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage.set(
          error.status === 401
            ? 'Invalid username or password.'
            : 'Unable to sign in. Please try again.'
        );
      }
    });
  }

  signInWithOAuth(): void {
    this.authService.startOAuth();
  }

  signInWithSSO(): void {
    this.authService.startSso();
  }

}
