/// <reference path="../typings/aurelia/aurelia.d.ts" />

import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

@inject(Router)
export class App {
  constructor(public router: Router) {
    router.configure(config => {
      config.title = 'TinyUI';
      config.map([
        { route: ['','examples'],  moduleId: './examples',      nav: true, title:'examples' }
      ]);
    });
  }
}
