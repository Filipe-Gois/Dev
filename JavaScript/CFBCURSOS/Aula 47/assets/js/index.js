"use strict";

//.find() método para encontrar um item em um array  *só retorna o primeiro elemento, caso haja uma lista*, *retorna undefined caso nao encontre algo*

const numeros = [1, 2, 3, 4, 5];

//retorna true se *TODOS* os itens forem menores que cinco
const numeroBuscado = numeros.find((e, i) => e === 3);

console.log(numeroBuscado);
