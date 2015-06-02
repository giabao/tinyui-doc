/// <reference path="../typings/aurelia/aurelia.d.ts" />
/// <reference path="../typings/highlight.js/hljs.d.ts" />

import hljs = require('highlight.js');
import 'highlight.js/styles/default.css!';

import {inject, computedFrom} from 'aurelia-framework';
import {HttpClient, IHttpResponseMessage} from 'aurelia-http-client';

import examplesData = require('example-data');

@inject(HttpClient)
export class Example {
  examples = examplesData;

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

  private static exRoot = 'tinyui/example/';

  private static get defaultStyleUrl(): string {
    return Example.exRoot + 'ui/styles.xml';
  }
  private get xmlUrl(): string {
    return Example.exRoot + 'ui/' + this.xmlFileName + '.xml';
  }
  private get srcUrl(): string {
    return Example.exRoot + 'src/UI' + util.toCamel(this.xmlFileName) + '.hx';
  }
  private get srcGenUrl(): string {
    return Example.exRoot + 'ui-codegen/UI' + util.toCamel(this.xmlFileName) + '.hx';
  }

  private onHttpRes(id: string) {
    return (res: IHttpResponseMessage<string>) => {
      var block = document.getElementById(`ui-${id}-code`);
      if(id === 'xml') {
        if (res.response.indexOf('<class import=') !== -1) {
          this.http.get(Example.defaultStyleUrl).then(this.onHttpRes('style'));
        } else {
          document.getElementById('ui-style-code').textContent = '';
        }
      }
      block.textContent  = res.response;
      hljs.highlightBlock(block);
    }
  }

  changeEx() {
    this.http.get(this.xmlUrl).then(this.onHttpRes('xml'));
    this.http.get(this.srcUrl).then(this.onHttpRes('src'));
    this.http.get(this.srcGenUrl).then(this.onHttpRes('gen'));
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
