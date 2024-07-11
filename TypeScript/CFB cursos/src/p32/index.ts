//namespace: Forma de organizar/direcionar o conteúdo

namespace Veiculos {
  export class Carro {
    nome: string;

    constructor(nome: string) {
      this.nome = nome;
    }
  }
}

namespace Motores {
  class Turbo {
    potencia: number;
    constructor(potencia: number) {
      this.potencia = potencia;
    }
  }
  export class Motor {}
}

const carro1 = new Veiculos.Carro("Ferrari");

console.log(carro1.nome);
