import { HttpClient } from '@angular/common/http';
import { Component, HostListener, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { environment } from '../../../../environments/environment';
import { getSamlBackendUrl } from '../../../utils/saml-backend-url';

interface SamlProfile {
  issuer: string;
  nameID: string;
  nameIDFormat?: string;
  sessionIndex?: string;
  attributes: Record<string, string | string[]>;
}

@Component({
  selector: 'app-saml-profile',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class SamlProfileComponent {
  readonly profile = signal<SamlProfile | null>(null);
  readonly loading = signal(true);
  readonly errorMessage = signal<string | null>(null);

  private readonly http = inject(HttpClient);
  private readonly route = inject(ActivatedRoute);

  constructor() {
    const ticket = this.route.snapshot.queryParamMap.get('ticket');
    window.history.replaceState(
      window.history.state,
      '',
      window.location.pathname,
    );

    if (!ticket) {
      this.loading.set(false);
      this.errorMessage.set(
        'The sign-in result is missing or expired. Please sign in again.',
      );
      return;
    }

    const profileUrl = getSamlBackendUrl(environment.saml.profilePath);
    if (!profileUrl) {
      this.loading.set(false);
      this.errorMessage.set('SAML is not configured for this environment.');
      return;
    }

    this.http
      .get<SamlProfile>(
        `${profileUrl}?ticket=${encodeURIComponent(ticket)}`,
        { withCredentials: true },
      )
      .subscribe({
        next: (profile) => this.profile.set(profile),
        error: () => {
          this.errorMessage.set(
            'The sign-in result expired or could not be loaded. Please sign in again.',
          );
          this.loading.set(false);
        },
        complete: () => this.loading.set(false),
      });
  }

  profileAttributes(): { name: string; value: string }[] {
    const attributes = this.profile()?.attributes ?? {};
    return Object.entries(attributes).map(([name, value]) => ({
      name,
      value: Array.isArray(value) ? value.join(', ') : value,
    }));
  }

  signInAgain(): void {
    const loginUrl = getSamlBackendUrl(environment.saml.loginPath);
    if (loginUrl) {
      window.location.assign(loginUrl);
    } else {
      this.errorMessage.set('SAML sign-in is not configured for this environment.');
    }
  }

  signOut(): void {
    this.clearProfileFromHistory();
    const logoutUrl = getSamlBackendUrl(environment.saml.logoutPath);
    if (logoutUrl) {
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = logoutUrl;
      document.body.appendChild(form);
      form.submit();
    } else {
      this.errorMessage.set('SAML sign-out is not configured for this environment.');
    }
  }

  @HostListener('window:pagehide')
  onPageHide(): void {
    this.clearProfileFromHistory();
  }

  @HostListener('window:pageshow', ['$event'])
  onPageShow(event: PageTransitionEvent): void {
    if (event.persisted) {
      this.clearProfileFromHistory();
    }
  }

  private clearProfileFromHistory(): void {
    this.profile.set(null);
    this.loading.set(false);
    this.errorMessage.set(
      'Your profile is no longer available. Please sign in again.',
    );
  }
}
