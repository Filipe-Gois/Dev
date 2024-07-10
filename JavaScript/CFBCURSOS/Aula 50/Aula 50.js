"use strict";

// metodo reduce()
//.reduce((valorAnterior, elemento, index, array) => {}, 0) reduz o array | 0 é dado como o valor inicial
//*vale ressaltar que o "valorAnterior" não é o elemento anterior ao atual que está sendo percorrido, mas sim a soma de todos os outros elementos que já foram percorridos*

const numeros = [1, 2, 3, 4, 5];

//soma o valor de cada numero do array e retorna em uma soma total
const totalNumerosArray = numeros.reduce(
  (valorAnterior, valorAtual, index, array) => valorAnterior + valorAtual
);

// console.log(totalNumerosArray);

const numerosParesSoma = numeros.reduce(
  (anterior, atual) => (atual % 2 === 0 ? atual + anterior : anterior),
  0
);

console.log(numerosParesSoma);
