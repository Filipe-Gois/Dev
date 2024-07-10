//herança
//classe que herda outra classe

class Carro {
  //classe pai ou classe base
  constructor(nome, portas = 4) {
    this.nome = nome;
    this.portas = portas;
    this.ligado = false;
    this.velocidade = 0;
    this.cor = undefined;
  }
  ligar = function () {
    this.ligado = true;
  };
  desligar = function () {
    this.ligado = false;
  };
  setCor = function (cor) {
    this.cor = cor;
  };
}
//carro militar herda a classe carro
class Militar extends Carro {
  constructor(nome, portas = 4, blindagem, municao) {
    //usado para invocar algo da classe pai, nesse caso, é o construtor
    super(nome, portas);
    this.blindagem = blindagem;
    this.municao = municao;
    this.setCor("amarelo");
  }
  atirar = function () {
    if (this.municao > 0) {
      this.municao--;
    }
  };
}

class Utilitario extends Carro {
  constructor(nome, portas) {
    super(nome, portas);
  }
}

const c1 = new Carro("Ferrari", 1);
const c2 = new Militar("Tanque", 1, "boa", 100);
c1.ligar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
console.log(c1);
console.log(c2);
