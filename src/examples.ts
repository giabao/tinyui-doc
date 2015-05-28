/// <reference path="../typings/aurelia/aurelia.d.ts" />
/// <reference path="../typings/highlight.js/hljs.d.ts" />

import hljs = require('highlight.js');
import 'highlight.js/styles/default.css!';

import {inject, computedFrom} from 'aurelia-framework';
import {HttpClient, IHttpResponseMessage} from 'aurelia-http-client';

@inject(HttpClient)
export class Example {
  examples = ['empty', 'field-attr', 'this-node', 'local-var', 'initUI-args', 'view-item', 'declare-var',
    'view-item-local-var-name', 'item-field-node', 'function-node', 'new-expression', 'using-extension-method',
    'nested-items', 'for-loop', 'layout', 'tooltip', 'modes'];

  curEx = 'view-item';

  @computedFrom('curEx')
  get curIdx() { return this.examples.indexOf(this.curEx); }

  constructor(public http: HttpClient) { }

  attached() {
    this.changeEx();
  }

  private get xmlFileName(): string {
    var idx = this.curIdx + 1;
    var prefix = idx < 10? '0' : '';
    return prefix + idx + '-' + this.curEx;
  }

  private get xmlUrl(): string {
    return 'dist/exam/ui/' + this.xmlFileName + '.xml';
  }
  private get srcUrl(): string {
    return 'dist/exam/src/UI' + util.toCamel(this.xmlFileName) + '.hx';
  }
  private get srcGenUrl(): string {
    return 'dist/exam/ui-codegen/UI' + util.toCamel(this.xmlFileName) + '.hx';
  }

  private static onHttpRes(id: string) {
    return function(res: IHttpResponseMessage<string>) {
      var block = document.getElementById(`ui-${id}-code`);
      block.textContent  = res.response;
      hljs.highlightBlock(block);
    }
  }

  changeEx() {
    this.http.get(this.xmlUrl).then(Example.onHttpRes('xml'));
    this.http.get(this.srcUrl).then(Example.onHttpRes('src'));
    this.http.get(this.srcGenUrl).then(Example.onHttpRes('gen'));
  }

  next() {
    this.curEx = this.examples[this.curIdx + 1];
    this.changeEx();
  }

  prev() {
    this.curEx = this.examples[this.curIdx - 1];
    this.changeEx();
  }

  @computedFrom('curEx')
  get disableNext() { return this.curEx == this.examples[this.examples.length - 1]; }

  @computedFrom('curEx')
  get disablePrev() { return this.curEx == this.examples[0]; }
}

module util {
  export function toCamel(s: string): string {
    return s.replace(/(\-[a-z])/g, $1 => $1.toUpperCase().replace('-',''));
  }
}
