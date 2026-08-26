import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  standalone: true,
  template: `
    <p>Signing you in...</p>
  `
})
export class CallbackComponent implements OnInit {

  private clientId = 'UDNJUXFjRUNIRjhGYVBNb2FvdFhVY3loN2pBZjpUUEEzSVF0ckJSeXlYUzY1Y0I2UXhzU2I3V0dWUlkj';

  private redirectUri =
    'https://localhost:4200/callback';

  private tokenEndpoint =
    'https://api.descope.com/oauth2/v1/apps/token';


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
      return;
    }

    if (!code) {
      console.error('Authorization code not found');
      return;
    }

    // 4. Verify state
    const savedState =
      sessionStorage.getItem('oauth_state');

    if (!state || state !== savedState) {
      console.error('Invalid OAuth state');
      return;
    }

    // 5. Get PKCE verifier
    const verifier =
      sessionStorage.getItem('pkce_verifier');

    if (!verifier) {
      console.error('PKCE verifier not found');
      return;
    }

    // 6. Exchange authorization code
    const tokenResponse =
      await this.exchangeCodeForToken(
        code,
        verifier
      );

    console.log('Token response:', tokenResponse);

    // 7. Store access token for now
    sessionStorage.setItem(
      'access_token',
      tokenResponse.access_token
    );

    // 8. Clean up
    sessionStorage.removeItem('pkce_verifier');
    sessionStorage.removeItem('oauth_state');

    // 9. Go to your application
    await this.router.navigate(['/customer']);

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
      this.clientId
    );

    body.set(
      'code',
      code
    );

    body.set(
      'redirect_uri',
      this.redirectUri
    );

    body.set(
      'code_verifier',
      verifier
    );


    const response =
      await fetch(
        this.tokenEndpoint,
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

      const error =
        await response.text();

      console.error(
        'Token exchange failed:',
        error
      );

      throw new Error(
        'Unable to get access token'
      );
    }


    return await response.json();
  }
}