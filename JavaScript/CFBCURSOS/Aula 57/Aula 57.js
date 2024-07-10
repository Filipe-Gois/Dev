//Entendendo sobre Objetos

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}
//o () é o mesmo do construtor. Se o construtor da classe tiver um parametro, deverá ser passado esse parametro na instancia
let pessoa1 = new Pessoa("Filipe");

pessoa1.idade = 17;

console.log(pessoa1);
