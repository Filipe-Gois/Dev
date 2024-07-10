//abstract
//uma classe abstrata nao pode ser instanciada
//só serve de base para outras classes
//*só pode ser extendida* */
//o conceito de abstração nao existe diretamente no JS

class CarroPadrao {
  constructor() {
    if (this.constructor === CarroPadrao) {
      throw new TypeError("Esta classe não pode ser instanciada!");
    }
    //obrigar um método a ser implementado:
    if (this.ligar === undefined) {
      throw new TypeError("É obrigatório! implementar o método LIGAR!");
    }
    this.rodas = 4;
    this.portas = 4;
    this.ligado = false;
  }
}

class Carro extends CarroPadrao {
  constructor(estagio, tipo) {
    super();
    this.turbo = new Turbo(estagio);
    switch (tipo) {
      case 1:
        this.velocidadeMaxima = 120;
        this.nome = "Normal";
        break;
      case 2:
        this.velocidadeMaxima = 160;
        this.nome = "Esportivo";
        break;
      case 3:
        this.velocidadeMaxima = 200;
        this.nome = "Super esportivo";
        break;

      default:
        this.velocidadeMaxima = 100;
        this.nome = "Default";
        break;
    }

    this.velocidadeMaxima += this.turbo.potencia;
  }

  info() {
    console.log(
      `Nome: ${this.nome}. Velocidade máxima: ${this.velocidadeMaxima}. Turbo: ${this.turbo}`
    );
    console.log(this.turbo);
  }
  ligar() {
    console.log("ligar");
  }
}

class Turbo {
  constructor(estagio) {
    switch (estagio) {
      case 1:
        this.potencia = 50;

        break;
      case 2:
        this.potencia = 75;

        break;
      case 3:
        this.potencia = 100;

        break;

      default:
        this.potencia = 0;
        break;
    }
  }
}

class CarroEspecial extends Carro {
  constructor(estagioTurbo) {
    super(estagioTurbo, 4);
    this.tipoInfo = 1;
    this.velocidadeMaxima = 500 + this.turbo.potencia;
    this.nome = "Carro especial";
  }
  //esse metodo sobrescreveu o da classe "Carro"
  info() {
    if (this.tipoInfo === 1) {
      super.info();
    } else {
      //se quiser acessar o metodo da classe "Carro:"
      // super.info()

      console.log(
        `Info do carro especial '${this.nome}': Velocidade maxima: ${this.velocidadeMaxima} `
      );
    }
  }
}

const c1 = new Carro(2, 1);
const c3 = new CarroEspecial(3);

c1.info();
c3.info();
