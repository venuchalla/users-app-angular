import { Component } from '@angular/core';

@Component({
  selector: 'app-oauth',
  imports: [],
  standalone: true,
  templateUrl: './oauth.component.html',
  styleUrl: './oauth.component.scss',
})
export class OauthComponent {

  private clientId = 'UDNJUXFjRUNIRjhGYVBNb2FvdFhVY3loN2pBZjpUUEEzSVF0ckJSeXlYUzY1Y0I2UXhzU2I3V0dWUlkj';

  private redirectUri =
    'https://localhost:4200/oauth/callback';

  private authorizationEndpoint =
    'https://api.descope.com/oauth2/v1/apps/authorize';


  async login(): Promise<void> {

    // 1. Generate PKCE code verifier
    const verifier = this.generateCodeVerifier();

    // 2. Generate PKCE code challenge
    const challenge =
      await this.generateCodeChallenge(verifier);

    // 3. Save verifier.
    // We need it later when Descope redirects back.
    sessionStorage.setItem(
      'pkce_verifier',
      verifier
    );

    // 4. Optional but recommended: state
    const state = this.generateRandomString();

    sessionStorage.setItem(
      'oauth_state',
      state
    );

    // 5. Build Descope authorization URL
    const params = new URLSearchParams({
      client_id: this.clientId,
      response_type: 'code',
      redirect_uri: this.redirectUri,
      scope: 'full_access',
      state: state,
      code_challenge: challenge,
      code_challenge_method: 'S256'
    });

    // 6. Redirect browser to Descope
    window.location.href =
      `${this.authorizationEndpoint}?${params.toString()}`;
  }


  private generateCodeVerifier(): string {

    const randomBytes =
      new Uint8Array(32);

    crypto.getRandomValues(randomBytes);

    return this.base64UrlEncode(randomBytes);
  }


  private async generateCodeChallenge(
    verifier: string
  ): Promise<string> {

    // Convert verifier to bytes
    const data =
      new TextEncoder().encode(verifier);

    // SHA-256
    const digest =
      await crypto.subtle.digest(
        'SHA-256',
        data
      );

    // Convert hash to Base64URL
    return this.base64UrlEncode(
      new Uint8Array(digest)
    );
  }


  private base64UrlEncode(
    bytes: Uint8Array
  ): string {

    let binary = '';

    bytes.forEach(byte => {
      binary += String.fromCharCode(byte);
    });

    return btoa(binary)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');
  }


  private generateRandomString(): string {

    const randomBytes =
      new Uint8Array(32);

    crypto.getRandomValues(randomBytes);

    return this.base64UrlEncode(randomBytes);
  }
}