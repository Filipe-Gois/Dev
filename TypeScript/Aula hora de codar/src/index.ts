let x: number = 1230;

x++;

console.log(x);

const myNumbers: number[] = [1, 2, 3, 4];

let myTuple: [number, string, string[]];

const user: { id: number; name: string; isDoctor: boolean } = {
  id: 123,
  name: "John Doe",
  isDoctor: true,
};

console.log(user);

let id: number | string | boolean | number[] = [1, 2];

type myIdType = number | string;

const userId: myIdType = 1;

enum Size {
  P = "Small",
  M = "Medium",
  G = "Large",
}

const camisa = {
  name: "Sla",
  size: Size.M,
};

console.log(camisa);

let teste: "asdasd" | "1";

const soma = (a: number, b: number) => {
  return a + b;
};

const sayHello = (name: string): string => {
  return `Hello,` + name;
};

const logger = (msg: string): void => console.log(msg);

logger("asdsad");

// ?: indica que o parametro é opcional
const greeting = (name: string, greet?: string): void =>
  console.log(greet ? `Olá, ${greet} ${name}` : `Olá, ${name}`);

greeting("fefe", "dkasjfh");

//interfaces

interface MathFunctionParameters {
  n1: number;
  n2: number;
}

const sumNums = (nums: MathFunctionParameters): number => {
  let { n1 } = nums;
  let { n2 } = nums;
  return n1 + n2;
};

console.log(sumNums({ n1: 10, n2: 28 }));

const mutipleNums = (numeros: MathFunctionParameters): number =>
  numeros.n1 * numeros.n2;

console.log(mutipleNums({ n1: 10, n2: 10 }));

const numbers: MathFunctionParameters = {
  n1: 12,
  n2: 12,
};

console.log(mutipleNums(numbers));

//narrowing
//checagem de tipos

const doSomething = (info: number | boolean): void =>
  console.log(
    typeof info === "number"
      ? `O número é ${info}`
      : `Não foi passado um número!`
  );

doSomething(true);

//generics
//USAR GENERICS AO INVES DE ANY **NAO SE USA ANY**

function show<T>(arr: T[]) {}

const showArrayItems = <T>(arr: T[]) =>
  arr.forEach((item) => console.log(`Item: ${item}`));

showArrayItems([1, "asdfas", 3, 4]);

//classes

class User {
  id;
  name;
  role;

  constructor(id: number, name: string, role: string) {
    this.id = id;
    this.name = name;
    this.role = role;
  }

  //criar metodos para a classe

  showUserName(): void {
    console.log(`O nome do usuaro é: ${this.name}`);
  }

  showUserRole(canShow: boolean): void {
    console.log(
      canShow
        ? `A role do usuaro é: ${this.role}`
        : "Não foi possível ver o valor"
    );
  }
}

const Zeca: User = new User(123, "Zeca", "Adm");

console.log(Zeca);

Zeca.showUserName();

Zeca.showUserRole(true);
