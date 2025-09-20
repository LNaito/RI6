"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bhaskara = /** @class */ (function () {
    function Bhaskara() {
    }
    Bhaskara.prototype.bhaskara = function (a, b, c) {
        if (a === 0) {
            return "O coeficiente 'a' não pode ser 0";
        }
        var delta = Math.pow(b, 2) - 4 * a * c;
        if (delta < 0) {
            return "Delta = ".concat(delta, ". N\u00E3o existem ra\u00EDzes reais.");
        }
        var raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        var raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        return "x1 = ".concat(raiz1, ", x2 = ").concat(raiz2);
    };
    return Bhaskara;
}());
exports.default = Bhaskara;
