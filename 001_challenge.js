// array de números inteiros - lista a ser manipulada por intermédio do map, filter e do reduce
const numeros = [1, 2, 3, 4];

// utilizando o map
const dobrar = (n) => n * 2;
const dobro = numeros.map(dobrar);

// utilizando o filter
const impares = (n) => n % 2 !== 0;
const impar = numeros.filter(impares);

// utilizando o reduce
const somar = (a, b) => a + b;
const soma = numeros.reduce(somar, 0); //inicia do zero

console.log(dobro); //usando map para dobrar cada elemento da lista
console.log(impar); //usando filter para filtrar apenas os ímpares da lista
console.log(soma);  //usando reduce para somar todos os elementos da lista