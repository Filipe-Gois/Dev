//Funções

function somarFunction(n1: number, n2: number): number {
  return n1 + n2;
}

const somarArrowFunction = (...numeros: number[]): number =>
  numeros.reduce((x, y) => x + y);

console.log(somarArrowFunction(1, 2, 3, 4, 5));
