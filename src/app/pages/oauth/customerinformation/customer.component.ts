import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  standalone: true,
  templateUrl: './customer.component.html',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
  ]
})
export class CustomerComponent implements OnInit {

  private httpClient = inject(HttpClient);
  private router = inject(Router);
  private token: string | null;




  userProfile = signal<UserProfile | null>(null);
  isLoading = signal<boolean>(false);
  errorMessage = signal<string | null>(null);

  constructor() {
    this.token = sessionStorage.getItem('access_token');
    console.log('CustomerComponent initialized');
  }
  ngOnInit(): void {

    if (this.token) {
      this.getFetchInfo(this.token);
    } else {
      console.error('ID token not found in session storage');
      this.navigateToOauthPage();

    }
  }

  @HostListener('window:pageshow', ['$event'])
  onPageShow(event: PageTransitionEvent): void {
    if (event.persisted && !sessionStorage.getItem('access_token')) {
      this.userProfile.set(null);
      this.navigateToOauthPage();
    }
  }

  revokeToken() {
    if (this.token) {
      this.callRevokeTokenEndpoint(this.token);
    } else {
      console.error('Access token not found in session storage');
      this.navigateToOauthPage();
    }

  }

  getFetchInfo(idToken: string) {
    this.isLoading.set(true);
    console.log('Fetching user info with ID token:', idToken);
    this.httpClient.get<UserProfile>(environment.oauth.userInfoEndpoint, {
      headers: {
        'Authorization': `Bearer ${idToken}`
      }
    }).subscribe({
      next: (data: any) => {
        console.log('User info fetched successfully:', data);
        this.isLoading.set(false);
        this.errorMessage.set(null);
        const uProfile = {
          firstName: data.given_name,
          lastName: data.family_name,
          email: data.email,
          phoneNumber: data.phoneNumber
        };


        this.userProfile.set(uProfile);
      },
      error: (err) => {
        console.error('Failed to fetch user info', err);
        this.errorMessage.set('Could not load user profile.');
        this.isLoading.set(false);
      }
    })
  }

  callRevokeTokenEndpoint(Token: string) {
    const body = new HttpParams()
      .set('token', Token)
      .set('client_id', environment.oauth.clientId);
    this.httpClient.post(environment.oauth.revokeEndpoint, body, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).subscribe({
      next: () => {
        console.log('Access token revoked successfully');
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('id_token');
        this.navigateToOauthPage();
      },
      error: (err) => {
        console.error('Failed to revoke access token', err);
      }
    });
  }

  navigateToOauthPage() {
    this.router.navigate(['/oauth'], {
      replaceUrl: true
    });
  }
  endsession() {
   this.logout();
  }

  logout(): void {
    const idToken = sessionStorage.getItem('id_token');
    const endSessionUrl = environment.oauth.endSessionEndpoint;
    const postLogoutRedirectUri = window.location.origin + '/home'; // Must be pre-registered in ZITADEL Console

    const params = new URLSearchParams({
      client_id: environment.oauth.clientId,
      post_logout_redirect_uri: postLogoutRedirectUri
    });

    if (idToken) {
      params.append('id_token_hint', idToken);
    }

    // Clear local storage/state before redirecting
    localStorage.clear();
    sessionStorage.clear();

    // Redirect browser to end session endpoint
    window.location.href = `${endSessionUrl}?${params.toString()}`;
  }
}
export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}
