// mais de um valor 

const x = 10;
const y = "algum texto";
const z = [1,2];

console.log(x, y, z);

// contagem de impressões 
console.count("O valor de x é: " + x + " contagem");
console.count("O valor de x é: " + x + " contagem");
console.count("O valor de x é: " + x + " contagem");
console.count("O valor de x é: " + x + " contagem");
console.count("O valor de x é: " + x + " contagem");

// variavel entre string 
console.log("Texto aleatorio %s, Texto aleatorio 2", x);

// limpar o console 
setTimeout(() => {
    console.clear()
}, 5000)