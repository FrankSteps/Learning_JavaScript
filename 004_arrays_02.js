const notas = [10, 6, 3, 2, 7, 5, 1];

const apenasAprovados = nota => nota >= 7;
const apenasReprovados = nota => nota < 7;

/*
    O filter é uma função também de alta ordem que pecorre uma lista(array) e retorna um valor verdadeiro ou falso.
    Se você quer apenas um número impar, então em uma lista:

    1 - verdadeiro -> 1
    2 - falso
    3 - verdadeiro -> 3
    4 - falso

    logo: 1, 3
*/

const aprovados = notas.filter(apenasAprovados);
const reprovados = notas.filter(apenasReprovados);

console.log(aprovados);
console.log(reprovados);