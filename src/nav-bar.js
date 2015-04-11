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
var NavBar = (function () {
    function NavBar() {
        this.router = null;
    }
    __decorate([aurelia_framework_1.bindable], NavBar.prototype, "router");
    return NavBar;
})();
exports.NavBar = NavBar;
//# sourceMappingURL=nav-bar.js.map