let array = [1, 2, 3, 4];

//são variaveis isoladas. Cada variavel recebe o valor de cada indice do "array"
// let [aa, bb, cc, dd] = array;
//ou
let [aa, bb, cc, dd] = [10, 20, 30, 40];

console.log(aa);
console.log(bb);

const objeto = {
  cor1: "red",
  cor2: "branco",
  cor3: "preto",
};

const { cor1, cor2, cor3 } = objeto;

//------p36

const texto = "Curso de Typescript";

let [...t] = texto.split(" ");
let [p1, p2, p3] = texto.split(" ");

console.log(t);
console.log(p1);
console.log(p2);
console.log(p3);
