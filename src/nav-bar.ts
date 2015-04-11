/// <reference path="../typings/aurelia/aurelia.d.ts" />

import {bindable} from 'aurelia-framework';

export class NavBar {
  @bindable router: string | Array<string> = null;
}
