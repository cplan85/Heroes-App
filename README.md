# HeroesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

### Built With

Angular and Angular Materials comprise the front-end UI Components. RxJS is used for the authentication observables. Typescript is the base language for Angular.

* [![Angular][Angular.io]][Angular-url]
* [![Material][Angular.material]][Material-url]
* ![RxJS](https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=reactivex&logoColor=white)
* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)



<p align="right">(<a href="#readme-top">back to top</a>)</p>



## :mortar_board: **What did I learn from this project**

In this project I learned how to <b>lazy load modules</b> by modifying the main App router and creating a folder structure where each section contains its own Module to be exported. For example, there is an Authorization section, that contains a Login and Register page. Once a user go to a link of "auth/" this will load that module containing both pages.

I learned how to incorporate various Angular Material components such as Sidenav and Autocomplete.

JSON-Server:
I learned how to incorporate interface with a simple backend with [Json Server](https://www.npmjs.com/package/json-server). In this backend with a predefined JSON there are two collections: Users and Heroes.

Angular-Flex-Layout:
Instead of using Angular Material's Grid List, I learned to implement [Angular-Flex-Layout](https://www.npmjs.com/package/@angular/flex-layout) to create the centered columns for the Heroe cards.

Image Pipe:
I created an image handling pipe, that takes a whole object as an argument, and then returns an image url if it finds it or an alternate image if it is not found.

Switchmap:
I utilized [Switchmap](https://www.learnrxjs.io/learn-rxjs/operators/transformation/switchmap) to first gather the route parameter of id within the Heroe component, and then use that id to make an http call to the mock Json-Server. 

Environment Variables:
Instead of writing out a full string for the http call, the localhost is indicated in the environment, while a product variable is to be included for production.

CanLoad and CanActivate Authorization Guards:
This app has both CanLoad and CanActivate implemented to protect the heroes Route. I learned that CanLoad functions exactly when the application structure is implementing lazyLoading of modules. Once a module is loaded within the app, CanActivate must be used to guard against revisting the restricted page.



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

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00

[Angular.material]: https://img.shields.io/badge/Material-9C27B0?style=for-the-badge&logo=angular&logoColor=white
[Material-url]: https://material.angular.io/

