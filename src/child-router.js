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
var ChildRouter = (function () {
    function ChildRouter(router) {
        this.router = router;
        this.heading = 'Child Router';
        router.configure(function (config) {
            config.map([
                { route: ['', 'welcome'], moduleId: './welcome', nav: true, title: 'Welcome' },
                { route: 'flickr', moduleId: './flickr', nav: true },
                { route: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router' }
            ]);
        });
    }
    ChildRouter = __decorate([aurelia_framework_1.inject(aurelia_router_1.Router)], ChildRouter);
    return ChildRouter;
})();
exports.ChildRouter = ChildRouter;
//# sourceMappingURL=child-router.js.map