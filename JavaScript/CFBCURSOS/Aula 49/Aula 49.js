"use strict";

//metodo some
//.some((elemento, index, array) => {}) valida se *PELO MENOS UM* os itens do array atendem à uma determinada validação

const numeros = [1, 2, 3, 4, 5];

//retorna true se *PELO MENOS UM* dos itens forem menores que cinco
const algumDosNumerosEMenorOuIgualACinco = numeros.some((e) => e >= 5);

console.log(algumDosNumerosEMenorOuIgualACinco);
