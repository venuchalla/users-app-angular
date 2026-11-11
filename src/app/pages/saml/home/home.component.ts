import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { environment } from '../../../../environments/environment';
import { getSamlBackendUrl } from '../../../utils/saml-backend-url';

@Component({
	selector: 'app-saml-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	standalone: true,
	imports: [MatButtonModule, MatCardModule, MatIconModule, RouterLink],
})
export class SamlHomeComponent {
	readonly errorMessage = signal<string | null>(null);
	readonly statusMessage = signal<string | null>(null);
	readonly statusIsWarning = signal(false);

	private readonly route = inject(ActivatedRoute);

	constructor() {
		const query = this.route.snapshot.queryParamMap;
		if (query.has('logoutError')) {
			this.statusIsWarning.set(true);
			this.statusMessage.set(
				'Your local app session has been cleared. Zitadel did not confirm single logout, so its session may still be active.',
			);
		} else if (query.has('loggedout')) {
			this.statusMessage.set('You have been signed out.');
		} else if (query.has('error')) {
			this.errorMessage.set(
				'We could not verify the SAML sign-in response. Please try again.',
			);
		}
	}

	login(): void {
		this.errorMessage.set(null);
		const loginUrl = getSamlBackendUrl(environment.saml.loginPath);
		if (!loginUrl) {
			this.errorMessage.set('SAML sign-in is not configured for this environment.');
			return;
		}
		window.location.assign(loginUrl);
	}
}
