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
var aurelia_http_client_1 = require('aurelia-http-client');
var Flickr = (function () {
    function Flickr(http) {
        this.http = http;
        this.heading = 'Flickr';
        this.images = [];
        this.url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';
    }
    Flickr.prototype.activate = function () {
        var _this = this;
        return this.http.jsonp(this.url).then(function (response) {
            _this.images = response.content.items;
        });
    };
    Flickr.prototype.canDeactivate = function () {
        return confirm('Are you sure you want to leave?');
    };
    Flickr = __decorate([aurelia_framework_1.inject(aurelia_http_client_1.HttpClient)], Flickr);
    return Flickr;
})();
exports.Flickr = Flickr;
//# sourceMappingURL=flickr.js.map