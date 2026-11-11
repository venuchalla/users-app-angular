import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { environment } from '../../../../environments/environment';
import { getAppUrl } from '../../../utils/app-url';

@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatListModule
  ],
  templateUrl: './callback.component.html',
})
export class CallbackComponent implements OnInit {
  readonly isProcessing = signal(true);
  readonly errorMessage = signal<string | null>(null);

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}


  async ngOnInit(): Promise<void> {

    // 1. Get authorization code
    const code =
      this.route.snapshot.queryParamMap.get('code');

    // 2. Get state
    const state =
      this.route.snapshot.queryParamMap.get('state');

    // 3. Check for OAuth error
    const error =
      this.route.snapshot.queryParamMap.get('error');

    if (error) {
      console.error('Login failed:', error);
      this.showError('Sign-in was declined or could not be completed.');
      return;
    }

    if (!code) {
      console.error('Authorization code not found');
      this.showError('The authorization response did not include a sign-in code.');
      return;
    }

    // 4. Verify state
    const savedState =
      sessionStorage.getItem('oauth_state');

    if (!state || state !== savedState) {
      console.error('Invalid OAuth state');
      this.showError('The sign-in response could not be verified. Please try again.');
      return;
    }

    // 5. Get PKCE verifier
    const verifier =
      sessionStorage.getItem('pkce_verifier');

    if (!verifier) {
      console.error('PKCE verifier not found');
      this.showError('The secure sign-in session has expired. Please try again.');
      return;
    }

    try {
      const tokenResponse =
        await this.exchangeCodeForToken(code, verifier);

      sessionStorage.setItem('access_token', tokenResponse.access_token);
      sessionStorage.setItem('id_token', tokenResponse.id_token);
      sessionStorage.removeItem('pkce_verifier');
      sessionStorage.removeItem('oauth_state');

      await this.router.navigate(['../customer'], {
        relativeTo: this.route
      });
    } catch (error) {
      console.error('OAuth callback processing failed:', error);
      this.showError('We could not complete sign-in. Please return to the sign-in page and try again.');
    }
  }

  returnToSignIn(): void {
    this.router.navigate(['/oauth']);
  }

  private showError(message: string): void {
    this.isProcessing.set(false);
    this.errorMessage.set(message);
  }


  private async exchangeCodeForToken(
    code: string,
    verifier: string
  ): Promise<any> {

    const body =
      new URLSearchParams();

    body.set(
      'grant_type',
      'authorization_code'
    );

    body.set(
      'client_id',
      environment.oauth.clientId
    );

    body.set(
      'code',
      code
    );

    body.set(
      'redirect_uri',
      getAppUrl(environment.oauth.redirectPath)
    );

    body.set(
      'code_verifier',
      verifier
    );


    const response =
      await fetch(
        environment.oauth.tokenEndpoint,
        {
          method: 'POST',

          headers: {
            'Content-Type':
              'application/x-www-form-urlencoded'
          },

          body: body.toString()
        }
      );


    if (!response.ok) {

      throw new Error(
        'Unable to get access token'
      );
    }


    return await response.json();
  }
}