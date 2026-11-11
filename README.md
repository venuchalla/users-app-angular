# UsersApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Environment configuration

OAuth client IDs and URLs are configured in `src/environments/environment.local.ts`,
`environment.development.ts`, `environment.qa.ts`, and `environment.production.ts`.
Update the OAuth and SAML settings in the appropriate file before using that
environment. `environment.local.ts` points the SAML UI at the local backend on
`http://localhost:3001`. The mock SAML backend is for local development only;
production SAML requires a separately deployed backend.

Use the matching Angular configuration to select an environment:

```sh
ng serve --configuration local
ng serve --configuration development
ng serve --configuration qa
ng serve --configuration production
ng build --configuration qa
ng build --configuration production
```

Environment values are included in the browser bundle; client IDs and URLs must not
be treated as secrets.

## SAML sign-in

The sign-in button navigates to the backend URL configured by
`saml.backendUrl` and `saml.loginPath`. During local development, the mock
Express backend generates a signed SAML AuthnRequest and redirects to the
Zitadel SSO URL configured in `mock-backend/routes/saml/index.mjs`. A
development-only SP key pair is stored under `.local/saml/`; the private key is
git-ignored. The backend can also use `SAML_SP_PRIVATE_KEY` instead, which is
intended for deployment secrets. Never put the private key in an Angular
environment file or commit it to the repository.
Sign-in requests set `ForceAuthn`, asking Zitadel to prompt for authentication
instead of silently reusing an existing IdP session. This does not invalidate
the Zitadel session; successful SAML single logout is still required to end it.

The SP entity ID and assertion consumer URL default to the values in
`src/assets/cert/samldescripter.xml`; update both the metadata and the route if
these URLs change. Register `.local/saml/sp-public-cert.pem` with Zitadel and
re-upload the metadata after changing the ACS URL.

The Angular development server proxies the SAML endpoints to the mock backend
on port 3001. Run `npm run start:dev` to start both. Set `PORT` if the backend
needs to listen on another port, and update the environment's `saml.backendUrl`
accordingly. For a separately hosted backend, allow the frontend origin in
`SAML_ALLOWED_ORIGINS`, and set `SAML_SP_CALLBACK_URL`,
`SAML_SP_LOGOUT_CALLBACK_URL`, and `SAML_SP_FRONTEND_URL`. Register the backend
callback URLs with Zitadel when deploying a real backend. For production, the
callback URLs must point to that backend, and `SAML_SP_FRONTEND_URL` must be the
app base URL (including `/users-app-angular` for GitHub Pages). Set
`SAML_ALLOWED_ORIGINS` to the frontend origin, such as
`https://venuchalla.github.io` (without a path).

The production frontend and backend should be deployed on the same site where
possible (for example, `app.example.com` and `api.example.com`), since SAML
profile/logout flows use a secure session cookie. After the callback validates
the response, the app redirects to `/saml/profile`, where the profile screen
displays verified identity attributes and a Material spinner while loading.
The profile's **Sign out** button clears the local session, starts Zitadel
single logout, and returns to the home page with a status message. Register the metadata's
`https://localhost:4200/saml/logout/callback` Single Logout Service with Zitadel
and re-upload the metadata after changing it. The backend uses signed HTTP-POST
LogoutRequests because the current Zitadel SLO endpoint rejects Redirect
LogoutRequests during DEFLATE decoding. It backdates the LogoutRequest
`IssueInstant` by 30 seconds to tolerate Zitadel clock skew during request
validation. Zitadel currently returns an unsigned LogoutResponse, so the
backend accepts it only when its one-use RelayState cookie, request ID, issuer,
callback destination, timestamp, and success status match. The UI labels this
remote logout unverified; configure Zitadel to sign LogoutResponses for
cryptographic confirmation. The local backend keeps session state in memory,
so this flow is for local development only, not production hosting.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
