//parâmetros REST com SPREAD

//2-1 = 1. 3-1 = 2. 4-2=2. 5-2=3.
// const subtracao = (...nums: ReadonlyArray<number>): number =>
//   nums.reduce((x, y) => y - x);

const subtracao = (...nums: ReadonlyArray<number>): number =>
  nums.reduce((x, y) => x - y);

const soma15 = (...numeros: number[]): number =>
  numeros.reduce((x, y) => x + y);

const numerosAr: number[] = [1, 2, 3, 4, 5];
console.log(subtracao(...numerosAr));

console.log(soma15(...numerosAr));
