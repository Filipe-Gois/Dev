//Type Assertion e Typecast

//afirmar que um tipo desconhecido é de um tipo conhecido. SÓ FUNCIONA COM TIPOS "unknown"

let nValor: number;
let sValor: string = "20";
let valor: unknown;

valor = 10;
//"valor" ainda é reconhecido como "unknown", então é preciso "forçar" que o tipo number seja reconhecido.
// nValor = valor;

nValor = <number>valor;

console.log(valor);

//converte para a string para "unknown" e depois para "number"
nValor += <number>(<unknown>sValor);

console.log(nValor);

//cast

console.log(Number.parseFloat(sValor))
