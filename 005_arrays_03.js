/*
    O reduce é uma função que recebe uma lista(array) e retorna um valor único.
    Um dos usos mais populares é somar todos os elementos de uma lista

    ex:
    1, 2, 3, 4, 5

    0  <- valor de início
    1  (0, 1)  =>  0 + 1
    3  (1, 2)  =>  1 + 2
    6  (3, 3)  =>  3 + 3
    10 (6, 4)  =>  6 + 4
    15 (10, 5) =>  10 + 5

    logo: 15
*/

const numeros = [1, 2, 3, 4, 5];

// análogo ao somatório
const somar = (a, b) => a + b; // a - acumulador; b - elemento atual

// análogo ao produtório
const multiplicar = (a, b) => a * b; 

const soma = numeros.reduce(somar, 0);     // começa em 0
const produto = numeros.reduce(multiplicar, 1); // começa em 1

console.log("Soma:", soma);       // 15
console.log("Produto:", produto); // 120
