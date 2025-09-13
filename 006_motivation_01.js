function gritar(texto) {
    return texto.toUpperCase();
}

function enfatizar(texto) {
    return texto + "!!!";
}

function tornarLento(texto) {
    return texto.split('').join(' ');
}

function composicao(...funcoes){
    return function(valor) {
        return funcoes.reduce((acc, fn) => fn(acc)), valor;
    }
}

const desesperado = composicao(
    gritar,
    enfatizar,
    tornarLento,
);

console.log(desesperado('para'));