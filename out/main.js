"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = __importStar(require("readline"));
var multiplicacao_1 = __importDefault(require("./multiplicacao"));
var soma_1 = __importDefault(require("./soma"));
var subtracao_1 = __importDefault(require("./subtracao"));
var mensagens_1 = __importDefault(require("./mensagens"));
var divisao_1 = __importDefault(require("./divisao"));
var potencia_1 = __importDefault(require("./potencia"));
var radiciacao_1 = __importDefault(require("./radiciacao"));
var bhaskara_1 = __importDefault(require("./bhaskara"));
var mensagens = new mensagens_1.default();
var numero1;
var numero2;
var numero3;
var iniciar = function () {
    var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    leitor.question("Qual opera\u00E7\u00E3o deseja realizar?\n", function (valor) {
        var operacao = valor;
        if (valor == 'Bhaskara') {
            leitor.question("Digite 3 numeros para calcular Bhaskara: \n", function (valor) {
                var numeros = valor.trim().split(/\s+/);
                var numero1 = Number(numeros[0]);
                var numero2 = Number(numeros[1]);
                var numero3 = Number(numeros[2]);
                var calculo = new bhaskara_1.default();
                var resultado = calculo.bhaskara(numero1, numero2, numero3);
                console.log("Bhaskara: ".concat(resultado));
                leitor.close();
                mensagens.comoUsar();
                iniciar();
            });
        }
        else {
            leitor.question("Digite 2 numeros espa\u00E7ados: \n", function (valor) {
                var numeros = valor.split(' ');
                var instrucoes = valor.split(' ');
                var numero1 = Number(instrucoes[0]);
                var numero2 = Number(instrucoes[1]);
                console.log("Estas foram suas instru\u00E7\u00F5es: ".concat(instrucoes, "\n"));
                switch (operacao) {
                    case 'Somar':
                        var calculo = new soma_1.default();
                        console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
                        break;
                    case 'Subtrair':
                        calculo = new subtracao_1.default();
                        console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
                        break;
                    case 'Multiplicar':
                        calculo = new multiplicacao_1.default();
                        console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
                        break;
                    case 'Dividir':
                        calculo = new divisao_1.default();
                        console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
                        break;
                    case 'Radiciação':
                        calculo = new radiciacao_1.default();
                        console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
                        break;
                    case 'Potencia':
                        calculo = new potencia_1.default();
                        console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
                        break;
                    case 'Sair':
                        console.log("At\u00E9 uma pr\u00F3xima, falou...");
                        break;
                    default:
                        console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
                }
                leitor.close();
                if (operacao != 'Sair') {
                    mensagens.comoUsar();
                    iniciar();
                }
            });
        }
    });
};
mensagens.boasVindas();
mensagens.listarOpcoes();
mensagens.comoUsar();
iniciar();
