"use strict";

//metodo every
//.every((elemento, index, array) => {}) valida se todos os itens do array atendem à uma determinada validação

const numeros = [1, 2, 3, 4, 5];

//retorna true se *TODOS* os itens forem maiores ou iguais a cinco
const todosOsNumerosSaoMenoresOuIguaisACinco = numeros.every((e) => e >= 5);

console.log(todosOsNumerosSaoMenoresOuIguaisACinco);
