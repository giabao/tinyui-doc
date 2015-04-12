/// <reference path="../typings/aurelia/aurelia.d.ts" />

import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

@inject(Router)
export class App {
  constructor(public router: Router) {
    router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: ['','mCO2giantiep'],  moduleId: './mCO2giantiep',      nav: true, title:'mCO2giantiep' },
        { route: 'flickr',        moduleId: './flickr',       nav: true }
      ]);
    });
  }
}
