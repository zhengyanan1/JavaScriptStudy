"use strict";
exports.__esModule = true;
exports.Harden = void 0;
var Harden = /** @class */ (function () {
    function Harden(name, age) {
        this.name = name;
        this.age = age;
    }
    Harden.prototype.showName = function () {
        console.log(this.name);
    };
    return Harden;
}());
exports.Harden = Harden;
