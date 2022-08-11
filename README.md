# HeroesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## :mortar_board: **What did I learn from this project**

In this project I learned how to <b>lazy load modules</b> by modifying the main App router and creating a folder structure where each section contains its own Module to be exported. For example, there is an Authorization section, that contains a Login and Register page. Once a user go to a link of "auth/" this will load that module containing both pages.

I learned how to incorporate various Angular Material components such as Sidenav and Autocomplete.

JSON-Server:
I learned how to incorporate interface with a simple backend with [Json Server](https://www.npmjs.com/package/json-server). In this backend with a predefined JSON there are two collections: Users and Heroes.

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
