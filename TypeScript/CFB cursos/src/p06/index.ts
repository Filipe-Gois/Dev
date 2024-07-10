//Array e Readonly Array

let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let numeros: Array<Number | string> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Filipe"];

// let numeros: (Number | string)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Filipe"];

//adiciona no final
numeros.push(50);

//adiciona no inicio
numeros.unshift(10);

//remove o ultimo item do array
numeros.pop();

//remove o primeiro item do array
numeros.shift();

//esse tipo de array nao tem os metodos de manipulacao, por ser readonly
let numerosReadOnly: ReadonlyArray<number> = [100, 200, 300];
