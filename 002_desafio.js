const numeros = [1, 2, 3, 4, 5];

// função dobrar -() map
const dobra = (n) => n * 2;

// função de somar 3
const soma3 = (n) => n + 3;

// função que dobra e depois soma
const dobrarMais3 = (n) => soma3(dobra(n));

//aplica a função de dobrar e somar no array de números inteiros. Cada elemento é dobrado e adicionado 3
const resultado = numeros.map(dobrarMais3);
console.log(resultado); //[5, 7, 9, 11, 13]