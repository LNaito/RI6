import * as readline from 'readline';
import Multiplicacao from './multiplicacao';
import Soma from './soma';
import Subtracao from './subtracao';
import Mensagens from './mensagens';
import Divisao from './divisao';
import Potenciar from './potencia';
import Radiciacao from './radiciacao';
import Bhaskara from './bhaskara';

let mensagens = new Mensagens()
let numero1: number
let numero2: number
let numero3: number

let iniciar = () => {
  let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  leitor.question(`Qual operação deseja realizar?\n`, (valor) => {
    let operacao = valor

    if (valor == 'Bhaskara') {
    leitor.question(`Digite 3 numeros para calcular Bhaskara: \n`, (valor) => {
        let numeros = valor.trim().split(/\s+/);
        let numero1 = Number(numeros[0]);
        let numero2 = Number(numeros[1]);
        let numero3 = Number(numeros[2]);

        let calculo = new Bhaskara();
        let resultado = calculo.bhaskara(numero1, numero2, numero3);

        console.log(`Bhaskara: ${resultado}`);
        leitor.close();

        mensagens.comoUsar();
        iniciar();
    });
    }

    else{
      leitor.question(`Digite 2 numeros espaçados: \n`, (valor) =>{
        let numeros = valor.split(' ')
        let instrucoes = valor.split(' ')
        let numero1 = Number(instrucoes[0])
        let numero2 = Number(instrucoes[1])

    console.log(`Estas foram suas instruções: ${instrucoes}\n`)

    switch (operacao) {
      case 'Somar':
        let calculo = new Soma()
        console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
        break;
      case 'Subtrair':
        calculo = new Subtracao()
        console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
        break;
      case 'Multiplicar':
        calculo = new Multiplicacao()
        console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
        break;
      case 'Dividir':
        calculo = new Divisao()
        console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
        break;
      case 'Radiciação':
        calculo = new Radiciacao()
        console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
        break;
      case 'Potencia':
        calculo = new Potenciar()
        console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
        break;
      case 'Sair':
        console.log(`Até uma próxima, falou...`)
        break;
      default:
        console.log(`Operação não entendida :(`)
    }
    leitor.close()
    if (operacao != 'Sair') {
      mensagens.comoUsar()
      iniciar()
    }
    
  });

}
})}

mensagens.boasVindas()
mensagens.listarOpcoes()
mensagens.comoUsar()
iniciar()