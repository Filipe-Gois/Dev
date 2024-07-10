//Parâmetros REST em funções

//aqui tem um numero de parametros pré-definido
const soma1 = (n1 = 0, n2 = 0) => n1 + n2;

//pode passar quantos parametros quiser
const soma2 = (...numeros) =>
  numeros.reduce((valorAnterior, proximoValor) => valorAnterior + proximoValor);

//ou

const soma3 = (...numeros) => {
  let resultadoFinal = 0;
  for (const numero of numeros) {
    resultadoFinal += numero;
  }

  return resultadoFinal;
};

console.log(soma1(1, 3));
console.log(soma2(1, 7));
console.log(soma3(1, 3, 7));
