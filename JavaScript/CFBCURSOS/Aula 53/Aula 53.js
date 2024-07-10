//array

//Populando ARRAYS com funções

let numeros = [2, 2];

const soma = (...valores) =>
  valores.reduce((anterior, atual) => anterior + atual);

const subtracao = (...valores) =>
  valores.reduce((anterior, atual) => anterior - atual);

const multiplicacao = (...valores) =>
  valores.reduce((anterior, atual) => anterior * atual);

const divisao = (...valores) =>
  valores.reduce((anterior, atual) => anterior / atual);
//soma, subtracao, multiplicacao, divisao
const operacoes = [];
operacoes.push(soma, subtracao, multiplicacao, divisao);

console.log(
  operacoes[0](...numeros),
  operacoes[1](...numeros),
  operacoes[2](...numeros),
  operacoes[3](...numeros)
);

// console.log(operacoes[3](...numeros));
