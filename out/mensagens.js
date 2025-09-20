"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mensagens = /** @class */ (function () {
    function Mensagens() {
        this.listarOpcoes = function () {
            console.log("Aqui voc\u00EA pode:");
            console.log("Somar, Subtrair, Dividir, Multiplicar, Potenciar, Radicia\u00E7\u00E3o ou fazer um c\u00E1lculo de Bhaskara\n");
        };
        this.comoUsar = function () {
            console.log("Para usar digite os n\u00FAmeros e a op\u00E7\u00E3o de c\u00E1lculo separados por espa\u00E7o como: \"1.5 2.5 Soma\"");
            console.log("O resultado ser\u00E1 a soma dos n\u00FAmeros: 4");
            console.log("J\u00E1 para Bhaskara, voc\u00EA deve informar 3 n\u00FAmeros");
            console.log("Para encerrar digite \"Sair\"\n");
        };
        this.boasVindas = function () {
            console.log('\nBem-vindo a calculadora polimórfica\n');
        };
    }
    return Mensagens;
}());
exports.default = Mensagens;
