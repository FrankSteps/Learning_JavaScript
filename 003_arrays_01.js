const numeros = [1, 2, 3, 4, 5];

//map é uma função que recebe um array como parâmetro e retorna um novo array 
//map é uma função de alta ordem
const multiplicar2 = (n) => n * 2;
const multiplicar3 = (n) => n * 3;

const dobro = numeros.map(multiplicar2);
const triplo = numeros.map(multiplicar3);

console.log(dobro); // 2, 4, 6, 8, 10...
console.log(triplo); // 3, 6, 9, 12, 15...