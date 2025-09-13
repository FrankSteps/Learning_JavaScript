function executar(fn, ...params) {
    fn(params);
}

const somar = (a, b) => console.log(a + b);
executar(somar, a, b);