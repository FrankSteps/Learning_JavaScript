/*
function somar(a, b) {
    return a + b;
}

console.log(somar(a, b));
*/

//currying
function somar(a) {
    return function(b) {
        return a + b;
    }
}

//currying
function multiplicador(a) {
    return function(b) {
        return a * b;
    }
}

const somar2 = somar(2);
const somar4 = somar(4);

const dobrar = multiplicador(a);

console.log(somar(4)(5));
console.log(dobrar(5));
console.log(somar2(5));
console.log(somar4(5));