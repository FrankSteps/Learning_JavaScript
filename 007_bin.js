const bin = (str) => {
    if(str.length == 0){
        return 0;
    } else {
        const [x, ...xs]  = str
        return x == "1" ? (2**(str.length - 1)) + bin(xs) : bin(xs);
    }
}

console.log(bin(str));