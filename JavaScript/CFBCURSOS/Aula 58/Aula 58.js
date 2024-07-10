//construindo metodos nas classes

class Carro {
  constructor(nome, tipo) {
    this.nome = nome;
    if (tipo === 1) {
      this.tipo = "Esportivo";
      this.velocidade = 300;
    } else if (tipo === 2) {
      this.tipo = "Utilitário";
      this.velocidade = 100;
    } else if (tipo === 3) {
      this.tipo = "Passeio";
      this.velocidade = 160;
    } else {
      this.tipo = "Militar ";
      this.velocidade = 180;
    }
  }
  getNome() {
    return this.nome;
  }
  //método para alterar nome do carro
  setNome(nome) {
    this.nome = nome;
  }
  getTipo() {
    return this.tipo;
  }
  getVelocidadeMaxima() {
    return this.velocidade;
  }
  getInfo() {
    return [this.nome, this.tipo, this.velocidade];
  }
}

let carro1 = new Carro("carro rápido", 1);
let carro2 = new Carro("luxuoso ", 2);
let carro3 = new Carro("bombadão ", 4);
let carro4 = new Carro("carrega tudo ", 3);

carro1.setNome("ferrari");
console.log(carro1.getInfo());
