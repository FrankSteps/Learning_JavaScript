//currying
function multiplicador (x) {
    return function (y) {
        return x * y;
    }
}

const dobrar = multiplicador(2);
console.log(dobrar(5)); //10
console.log(dobrar(8)); //16