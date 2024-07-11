const Coisas = ["Cadeira", "Tv"];

class Person {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}
class Mouse {
  cor: string;
  idade: number;

  constructor(cor: string, idade: number) {
    this.cor = cor;
    this.idade = idade;
  }
}
export default Person;
export { Coisas, Mouse };
