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
//import {computedFrom} from 'aurelia-binding';
var Welcome = (function () {
    function Welcome() {
        this.heading = 'Welcome to the Aurelia Navigation App!';
        this.firstName = 'John';
        this.lastName = 'Doe';
    }
    Object.defineProperty(Welcome.prototype, "fullName", {
        //Getters can't be observed with Object.observe, so they must be dirty checked.
        //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
        //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
        //@computedFrom('firstName', 'lastName')
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    Welcome.prototype.welcome = function () {
        alert("Welcome, " + this.fullName + "!");
    };
    return Welcome;
})();
exports.Welcome = Welcome;
var UpperValueConverter = (function () {
    function UpperValueConverter() {
    }
    UpperValueConverter.prototype.toView = function (value) {
        return value && value.toUpperCase();
    };
    return UpperValueConverter;
})();
exports.UpperValueConverter = UpperValueConverter;
//# sourceMappingURL=welcome.js.map