//array

const cores = ["azul", "vermelho", "verde"];
const numeros = [1, 2, 3, 4, 5];

//adiciona um elemento ao final do array
numeros.push(6);

//adiciona um elemento no inicio do array
numeros.unshift(0);

//remove o ultimo elmento do array
numeros.pop();

//rremove o primerio elemento do array
numeros.shift();

console.log(numeros);

//matriz: quando tem um array dentro de um array

numeros.push(cores);
console.log(numeros[5][2]);
