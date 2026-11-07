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
Update the OAuth settings in the appropriate file before using that environment.
The development, QA, and production files contain empty OAuth settings until their
environment-specific values are provided.

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

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
