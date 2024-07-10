"use strict";
let x = 1230;
x++;
console.log(x);
const myNumbers = [1, 2, 3, 4];
let myTuple;
const user = {
  id: 123,
  name: "John Doe",
  isDoctor: true,
};
console.log(user);
let id = [1, 2];
const userId = 1;
var Size;
(function (Size) {
  Size["P"] = "Small";
  Size["M"] = "Medium";
  Size["G"] = "Large";
})(Size || (Size = {}));
const camisa = {
  name: "Sla",
  size: Size.M,
};
console.log(camisa);
let teste;
const soma = (a, b) => {
  return a + b;
};
const sayHello = (name) => {
  return `Hello,` + name;
};
const logger = (msg) => console.log(msg);
logger("asdsad");
const greeting = (name, greet) =>
  console.log(greet ? `Olá, ${greet} ${name}` : `Olá, ${name}`);
greeting("fefe", "dkasjfh");
const sumNums = (nums) => {
  let { n1 } = nums;
  let { n2 } = nums;
  return n1 + n2;
};
console.log(sumNums({ n1: 10, n2: 28 }));
const mutipleNums = (numeros) => numeros.n1 * numeros.n2;
console.log(mutipleNums({ n1: 10, n2: 10 }));
const numbers = {
  n1: 12,
  n2: 12,
};
console.log(mutipleNums(numbers));
const doSomething = (info) =>
  console.log(
    typeof info === "number"
      ? `O número é ${info}`
      : `Não foi passado um número!`
  );
doSomething(true);
function show(arr) {}
const showArrayItems = (arr) =>
  arr.forEach((item) => console.log(`Item: ${item}`));
showArrayItems([1, "asdfas", 3, 4]);
class User {
  id;
  name;
  role;
  constructor(id, name, role) {
    this.id = id;
    this.name = name;
    this.role = role;
  }
  showUserName() {
    console.log(`O nome do usuaro é: ${this.name}`);
  }
  showUserRole(canShow) {
    console.log(
      canShow
        ? `A role do usuaro é: ${this.role}`
        : "Não foi possível ver o valor"
    );
  }
}
const Zeca = new User(123, "Zeca", "Adm");
console.log(Zeca);
Zeca.showUserName();
Zeca.showUserRole(true);
