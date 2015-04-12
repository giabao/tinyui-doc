/// <reference path="../typings/aurelia/aurelia.d.ts" />
var __decorate = this.__decorate || function (decorators, target, key, value) {
    var kind = typeof (arguments.length == 2 ? value = target : value);
    for (var i = decorators.length - 1; i >= 0; --i) {
        var decorator = decorators[i];
        switch (kind) {
            case "function": value = decorator(value) || value; break;
            case "number": decorator(target, key, value); break;
            case "undefined": decorator(target, key); break;
            case "object": value = decorator(target, key, value) || value; break;
        }
    }
    return value;
};
var aurelia_framework_1 = require('aurelia-framework');
var aurelia_router_1 = require('aurelia-router');
require('bootstrap');
require('bootstrap/css/bootstrap.css!');
var App = (function () {
    function App(router) {
        this.router = router;
        router.configure(function (config) {
            config.title = 'Aurelia';
            config.map([
                { route: ['', 'mCO2giantiep'], moduleId: './mCO2giantiep', nav: true, title: 'mCO2giantiep' },
                { route: 'flickr', moduleId: './flickr', nav: true }
            ]);
        });
    }
    App = __decorate([aurelia_framework_1.inject(aurelia_router_1.Router)], App);
    return App;
})();
exports.App = App;
//# sourceMappingURL=app.js.map